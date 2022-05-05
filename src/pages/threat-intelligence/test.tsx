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
import person from "./new.json";

const pathPrefix = process.env.PATH_PREFIX;

export const Index = () => {
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
        <EuiButton href='/threat-intelligence/add-feeds' fill>Enable</EuiButton>
        <EuiButton href='/threat-intelligence/add-feeds' >Enable</EuiButton>
      </EuiCallOut>

      <EuiSpacer size="l" />

      <EuiFieldSearch
        fullWidth
        placeholder="Search indicators"
        append={<EuiButton fill>Search</EuiButton>}
      ></EuiFieldSearch>

      <EuiSpacer size="l" />

      <EuiText size="xs">
        Showing <strong>1 - 50</strong> of 500 <strong>indicators</strong>
      </EuiText>

      <EuiTablePagination
        aria-label="Custom EuiTable demo"
        pageCount={0}
        activePage={pageIndex}
        hidePerPageOptions
        compressed
      />
    <div className="App">
      <h1>Decoding JSON File</h1>
      <table>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Age</th>
          <th>Company</th>
          <th>Balance</th>
        </tr>
        <tr>
          <td>{person[0]._id}</td>
          <td>{person[0].name}</td>
          <td>{person[0].age}</td>
          <td>{person[0].company}</td>
          <td>{person[0].balance}</td>
        </tr>
        <tr>
          <td>{person[1]._id}</td>
          <td>{person[1].name}</td>
          <td>{person[1].age}</td>
          <td>{person[1].company}</td>
          <td>{person[1].balance}</td>
        </tr>
        <tr>
          <td>{person[2]._id}</td>
          <td>{person[2].name}</td>
          <td>{person[2].age}</td>
          <td>{person[2].company}</td>
          <td>{person[2].balance}</td>
        </tr>
        <tr>
          <td>{person[3]._id}</td>
          <td>{person[3].name}</td>
          <td>{person[3].age}</td>
          <td>{person[3].company}</td>
          <td>{person[3].balance}</td>
        </tr>
      </table>
    </div>
    </KibanaLayout>
  );
};
  export default Index;
