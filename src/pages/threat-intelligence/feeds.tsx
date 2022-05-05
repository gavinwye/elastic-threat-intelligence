import React, { useState, useRef } from "react";
import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiButton,
  EuiLink,
  EuiFieldSearch,
  EuiHealth,
  EuiSpacer,
  EuiBasicTable,
  EuiTablePagination,
  EuiText,
} from "@elastic/eui";
import KibanaLayout from "../../layouts/kibana";
import { formatDate } from "@elastic/eui/es/services/format";
import { createDataStore } from "./data_store";

const pathPrefix = process.env.PATH_PREFIX;

const store = createDataStore();

export const Index = () => {
  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(5);
  const [isLoading, setIsLoading] = useState(false);
  const [sortField, setSortField] = useState("firstName");
  const [sortDirection, setSortDirection] = useState("asc");
  const [selectedItems, setSelectedItems] = useState([]);
  const tableRef = useRef();

  const onTableChange = ({ page = {}, sort = {} }) => {
    setIsLoading(true);
    console.log("loading is now set to TRUE");

    const { index: pageIndex, size: pageSize } = page;

    const { field: sortField, direction: sortDirection } = sort;

    setTimeout(() => {
      setIsLoading(false);
      console.log("loading is now set to FALSE");

      setPageIndex(pageIndex);
      setPageSize(pageSize);
      setSortField(sortField);
      setSortDirection(sortDirection);
    }, 3000);
  };

  const onSelectionChange = (selectedItems) => {
    setSelectedItems(selectedItems);
  };

  const onClickDelete = () => {
    store.deleteUsers(...selectedItems.map((user) => user.id));

    setSelectedItems([]);
  };

  const renderDeleteButton = () => {
    if (selectedItems.length === 0) {
      return;
    }

    return (
      <EuiButton color="danger" iconType="trash" onClick={onClickDelete}>
        Delete {selectedItems.length} Users
      </EuiButton>
    );
  };

  const renderStatus = (online) => {
    const color = online ? "success" : "danger";
    const label = online ? "Online" : "Offline";
    return <EuiHealth color={color}>{label}</EuiHealth>;
  };

  const { pageOfItems, totalItemCount } = store.findUsers(
    pageIndex,
    pageSize,
    sortField,
    sortDirection
  );

  const deleteButton = renderDeleteButton();

  const columns = [
    {
      field: "Indicator",
      name: "Indicator",
      sortable: true,
      truncateText: true,
      mobileOptions: {
        show: true,
      },
    },
    {
      field: "indicatorType",
      name: "Indicator Type",
      sortable: true,
      truncateText: true,
      mobileOptions: {
        show: true,
      },
      render: (name, item) => (
        <EuiFlexGroup responsive={false} alignItems="center">
          <EuiFlexItem>
            {item.firstName} {item.lastName}
          </EuiFlexItem>
          <EuiFlexItem grow={false}>{renderStatus(item.online)}</EuiFlexItem>
        </EuiFlexGroup>
      ),
    },
    {
      field: "threatAction",
      name: "Threat Action",
      sortable: true,
      truncateText: true,
      render: (name, item) => (
        <EuiFlexGroup responsive={false} alignItems="center">
          <EuiFlexItem>
            {item.firstName} {item.lastName}
          </EuiFlexItem>
          <EuiFlexItem grow={false}>{renderStatus(item.online)}</EuiFlexItem>
        </EuiFlexGroup>
      ),
    },
    {
      field: "github",
      name: "Github",
      render: (username) => (
        <EuiLink href={`https://github.com/${username}`} target="_blank">
          {username}
        </EuiLink>
      ),
    },
    {
      field: "dateOfBirth",
      name: "Date of Birth",
      dataType: "date",
      render: (date) => formatDate(date, "dobLong"),
      sortable: true,
    },
    {
      field: "nationality",
      name: "Nationality",
      render: (countryCode) => {
        const country = store.getCountry(countryCode);
        return `${country.flag} ${country.name}`;
      },
    },
    {
      field: "online",
      name: "Online",
      dataType: "boolean",
      render: (online) => renderStatus(online),
      sortable: true,
      mobileOptions: {
        show: false,
      },
    },
  ];

  const pagination = {
    pageIndex: pageIndex,
    pageSize: pageSize,
    totalItemCount: totalItemCount,
    pageSizeOptions: [3, 5, 8],
    pageCount: 0,
  };

  const sorting = {
    sort: {
      field: sortField,
      direction: sortDirection,
    },
  };

  const onlineUsers = store.users.filter((user) => user.online);

  const selection = {
    selectable: (user) => user.online,
    selectableMessage: (selectable) =>
      !selectable ? "User is currently offline" : undefined,
    onSelectionChange: onSelectionChange,
    initialSelected: onlineUsers,
  };

  const onSelection = () => {
    tableRef.current.setSelection(onlineUsers);
  };

  return (
    <KibanaLayout
      pageHeader={{
        pageTitle: "Threat Intelligence",
        tabs: [
          {
            label: "Indicators",
            href: `${pathPrefix}/threat-intelligence/indicators`,
          },
          {
            label: "Feeds",
            href: `${pathPrefix}/threat-intelligence/feeds`,
            isSelected: true,
          },
        ],
        rightSideItems: [<EuiButton fill>Add feeds</EuiButton>],
      }}
    >
      <EuiFieldSearch
        fullWidth
        placeholder="Search feeds"
        append={<EuiButton fill>Search</EuiButton>}
      ></EuiFieldSearch>

      <EuiSpacer size="l" />

      <EuiBasicTable
        tableCaption="Demo for EuiBasicTable with selection"
        ref={tableRef}
        items={pageOfItems}
        itemId="id"
        columns={columns}
        sorting={sorting}
        isSelectable={true}
        selection={selection}
        onChange={onTableChange}
        rowHeader="firstName"
        loading={isLoading}
      />

      <EuiTablePagination
        aria-label="Custom EuiTable demo"
        pageCount={0}
        activePage={pageIndex}
        hidePerPageOptions
        compressed
      />
    </KibanaLayout>
  );
};

export default Index;
