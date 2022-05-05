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

      <EuiCallOut>
        <h2 color='#07c'>Enable the indicator match rule</h2>
        <p className=''>
          To see Threat Intelligence indicators here, you need to add some feeds.
        </p>
        <EuiButton href='/indicator-match/rule' fill>Enable</EuiButton>
      </EuiCallOut>

      <EuiSpacer size="l" />

      <EuiFieldSearch
        fullWidth
        placeholder="Search indicators"
        append={<EuiButton fill>Search</EuiButton>}
      ></EuiFieldSearch>

      <EuiSpacer size="l" />

      <EuiText>
        <h3>Table goes here with data</h3>
        <ul>
          <li>Indicator</li>
          <li>Indicator type</li>
          <li>Threat action</li>
          <li>First seen</li>
          <li>Provider overlap</li>
        </ul>
        <p>Data should come from JSON file `data.tsx` this isn't in the ECS format so need to do something with this. @max maybe this is something will need to sort out.</p>
        <h3>Page states</h3>
        <ul>
          <li>Enable indicator match rule. Action: turn on rule</li>
          <li>Indicators found. Actions: 1) LInk to alerts 2) dismiss</li>
          <li>No indicators found. Action: Dismiss</li>
        </ul>
        <p>Need to finds a way to store these page states in the session and show them at the right time in the journey.</p>
        <h3>Other page elements </h3>
        <ul>
          <li>Data for that table</li>
          <li>Add fields button</li>
          <li>KQL search bar, need to add that to the top of each page</li>
        </ul>
        <h3>Navigation</h3>
        <ul>
          <li>Navigate to indicator page from indicator in the table</li>
        </ul>
        <h3>Questions</h3>
        <ul>
          <li>Should we have a flyout on this page?</li>
          <li>Three buttons on this page with different actions what should we do about that?</li>
        </ul>
      </EuiText>

      <EuiSpacer size="l" />

      <EuiAccordion id={simpleAccordionId} buttonContent="Show page notes">
        <EuiPanel color="subdued">
          <EuiText size="s">
            <h4>Content that needs to go on this page</h4>

            <p>There are too many buttons on this page ATM. Need to figure out what the primary task is at this stage in the journey.</p>
          </EuiText>
        </EuiPanel>
      </EuiAccordion>

    </KibanaLayout>
  );
};

export default Index;
