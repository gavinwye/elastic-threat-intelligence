import { FunctionComponent,  } from 'react';
import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiCard,
  EuiIcon,
  EuiPageHeader,
  EuiButton,
  EuiCallOut,
  EuiLink,
  EuiTitle,
  EuiDataGrid,
  EuiText,
  EuiFieldSearch,
} from '@elastic/eui';
import KibanaLayout from '../../layouts/kibana';
import { EuiSideNav, htmlIdGenerator } from '@elastic/eui';

const pathPrefix = process.env.PATH_PREFIX;

const Index: FunctionComponent = () => {
  return (
    <KibanaLayout
      pageHeader={
        {
        pageTitle: 'Threat Intelligence',
          tabs: 
            [
            {
              label: 'Indicators',
              isSelected: true,
            },
            {
              label: 'Feeds',
              href: '/threat-intelligence/feeds',
            },
          ],
          rightSideItems: 
            [
            <EuiButton fill>Add feeds</EuiButton>,
           ]
      }
      }>
      <EuiFieldSearch fullWidth placeholder="Search indicators" append={<EuiButton fill>Search</EuiButton>} ></EuiFieldSearch>
    </KibanaLayout>
  );
};

import ReactDOM from "react-dom";
//import "@elastic/eui/dist/eui_theme_dark.css";
import "@elastic/eui/dist/eui_theme_light.css";
import React, { useState, Fragment, useRef } from "react";
import { formatDate } from "@elastic/eui/es/services/format";
import { createDataStore } from "./data_store";

import {
  EuiHealth,
  EuiSpacer,
  EuiBasicTable,
  EuiTablePagination
} from "@elastic/eui";

const store = createDataStore();

export const Table = () => {
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
      field: "firstName",
      name: "First Name",
      sortable: true,
      truncateText: true,
      mobileOptions: {
        show: false
      }
    },
    {
      field: "lastName",
      name: "Last Name",
      truncateText: true,
      mobileOptions: {
        show: false
      }
    },
    {
      field: "firstName",
      name: "Full Name",
      mobileOptions: {
        only: true,
        header: false,
        enlarge: true,
        width: "100%"
      },
      render: (name, item) => (
        <EuiFlexGroup responsive={false} alignItems="center">
          <EuiFlexItem>
            {item.firstName} {item.lastName}
          </EuiFlexItem>
          <EuiFlexItem grow={false}>{renderStatus(item.online)}</EuiFlexItem>
        </EuiFlexGroup>
      )
    },
    {
      field: "github",
      name: "Github",
      render: (username) => (
        <EuiLink href={`https://github.com/${username}`} target="_blank">
          {username}
        </EuiLink>
      )
    },
    {
      field: "dateOfBirth",
      name: "Date of Birth",
      dataType: "date",
      render: (date) => formatDate(date, "dobLong"),
      sortable: true
    },
    {
      field: "nationality",
      name: "Nationality",
      render: (countryCode) => {
        const country = store.getCountry(countryCode);
        return `${country.flag} ${country.name}`;
      }
    },
    {
      field: "online",
      name: "Online",
      dataType: "boolean",
      render: (online) => renderStatus(online),
      sortable: true,
      mobileOptions: {
        show: false
      }
    }
  ];

  const pagination = {
    pageIndex: pageIndex,
    pageSize: pageSize,
    totalItemCount: totalItemCount,
    pageSizeOptions: [3, 5, 8],
    pageCount: 0
  };

  const sorting = {
    sort: {
      field: sortField,
      direction: sortDirection
    }
  };

  const onlineUsers = store.users.filter((user) => user.online);

  const selection = {
    selectable: (user) => user.online,
    selectableMessage: (selectable) =>
      !selectable ? "User is currently offline" : undefined,
    onSelectionChange: onSelectionChange,
    initialSelected: onlineUsers
  };

  const onSelection = () => {
    tableRef.current.setSelection(onlineUsers);
  };

  return (
    <Fragment>
      <EuiFlexGroup alignItems="center">
        <EuiFlexItem grow={false}>
          <EuiButton onClick={onSelection}>Select online users</EuiButton>
        </EuiFlexItem>
        <EuiFlexItem />
        {deleteButton}
      </EuiFlexGroup>

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
    </Fragment>
  );
};


export default Index;
