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
  EuiCallOut,
  EuiAccordion,
  EuiPanel,
  useGeneratedHtmlId,
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
            {item.firstName}
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
            {item.lastName}
          </EuiFlexItem>
          <EuiFlexItem grow={false}>{renderStatus(item.online)}</EuiFlexItem>
        </EuiFlexGroup>
      ),
    },
    {
      field: "lastSeen",
      name: "Last seen",
      dataType: "date",
      render: (date) => formatDate(date, "dobLong"),
      sortable: true,
    },
    {
      field: "fisrtSeen",
      name: "FirstSeen",
      dataType: "date",
      render: (date) => formatDate(date, "dobLong"),
      sortable: true,
    },
    {
      field: "providerOverlap",
      name: "Provider Overlap",
      render: (name, item) => (
        <EuiFlexGroup responsive={false} alignItems="center">
          <EuiFlexItem>
            {item.lastName}
          </EuiFlexItem>
          <EuiFlexItem grow={false}>{renderStatus(item.online)}</EuiFlexItem>
        </EuiFlexGroup>
      ),
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

  const simpleAccordionId = useGeneratedHtmlId({ prefix: 'simpleAccordion' });

  return (
    
    <KibanaLayout
      pageHeader={{
        pageTitle: "Threat Intelligence",
        tabs: [
          {
            label: "Indicators",
            href: `${pathPrefix}/threat-intelligence/indicators`,
            isSelected: true,
          },
          {
            label: "Feeds",
            href: `${pathPrefix}/threat-intelligence/feeds`,
          },
        ],
        rightSideItems: [<EuiButton fill>Add feeds</EuiButton>],
      }}
    >
      

      <EuiCallOut color="danger">
        <EuiText color="danger"><h2 color="danger">Indicators found</h2></EuiText>
        <EuiText><p>The indicator match rule found 765 indicators. Alerts have been created for these indicators.</p></EuiText>
        <EuiSpacer size="m" />
        <EuiButton size="s" color="danger" href='/alerts/' fill>View the Alerts</EuiButton>
        <EuiButton size="s" color="danger" href='/alerts/' >Dismiss</EuiButton>
        {/* @to-do: These two buttons should have some space between them */}
      </EuiCallOut>

      <EuiSpacer size="l" />

      <EuiFieldSearch
        fullWidth
        placeholder="Search indicators"
        append={<EuiButton fill>Search</EuiButton>}
      ></EuiFieldSearch>

      <EuiSpacer size="l" />

      <EuiText >
        <h3>Table goes here</h3>
      </EuiText>


      <EuiSpacer size="l" />

      <EuiAccordion id={simpleAccordionId} buttonContent="Show page notes">
        <EuiPanel color="subdued">
          <EuiText size="s">
            <h4>Content that needs to go on this page</h4>
            <ul>
              <li>Table contaning indicators</li>
              <ul>
                <li><strong>Fields</strong></li>
                <li>Indicator</li>
                <li>Indicator type</li>
                <li>Threat action</li>
                <li>Last seen</li>
                <li>First seen</li>
                <li>Provider overlap</li>
              </ul>
              <li>Data for that table</li>
              <li>Add fields button</li>
            </ul>
            <p>There are too many buttons on this page ATM. Need to figure out what the primary task is at this stage in the journey.</p>
          </EuiText>
        </EuiPanel>
      </EuiAccordion>

    </KibanaLayout>
  );
};

export default Index;
