import { FunctionComponent } from 'react';
import { EuiFlexGroup, EuiFlexItem, EuiCard, EuiIcon, EuiPageHeader, EuiButton, EuiCallOut, EuiLink, EuiTitle, EuiDataGrid, } from '@elastic/eui';
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

        
    </KibanaLayout>


    
  );
};

import React from 'react';
import { formatDate, EuiBasicTable, EuiHealth } from '@elastic/eui';

/*
Example user object:

{
  id: '1',
  firstName: 'john',
  lastName: 'doe',
  github: 'johndoe',
  dateOfBirth: Date.now(),
  nationality: 'NL',
  online: true
}

Example country object:

{
  code: 'NL',
  name: 'Netherlands',
  flag: '🇳🇱'
}
*/



export const Table = () => {
  const columns = [
    {
      field: 'firstName',
      name: 'First Name',
      sortable: true,
      'data-test-subj': 'firstNameCell',
      mobileOptions: {
        render: (item) => (
          <span>
            {item.firstName}{' '}
            <EuiLink href="#" target="_blank">
              {item.lastName}
            </EuiLink>
          </span>
        ),
        header: false,
        truncateText: false,
        enlarge: true,
        width: '100%',
      },
    },
    {
      field: 'lastName',
      name: 'Last Name',
      truncateText: true,
      render: (name) => (
        <EuiLink href="#" target="_blank">
          {name}
        </EuiLink>
      ),
      mobileOptions: {
        show: false,
      },
    },
    {
      field: 'github',
      name: 'Github',
    },
    {
      field: 'dateOfBirth',
      name: 'Date of Birth',
      dataType: 'date',
      render: (date) => formatDate(date, 'dobLong'),
    },
    {
      field: 'nationality',
      name: 'Nationality',
      render: (countryCode) => {
        const country = store.getCountry(countryCode);
        return `${country.flag} ${country.name}`;
      },
    },
    {
      field: 'online',
      name: 'Online',
      dataType: 'boolean',
      render: (online) => {
        const color = online ? 'success' : 'danger';
        const label = online ? 'Online' : 'Offline';
        return <EuiHealth color={color}>{label}</EuiHealth>;
      },
    },
  ];

  const items = store.users.filter((user, index) => index < 10);

  const getRowProps = (item) => {
    const { id } = item;
    return {
      'data-test-subj': `row-${id}`,
      className: 'customRowClass',
      onClick: () => { },
    };
  };

  const getCellProps = (item, column) => {
    const { id } = item;
    const { field } = column;
    return {
      className: 'customCellClass',
      'data-test-subj': `cell-${id}-${field}`,
      textOnly: true,
    };
  };

  return (
    <EuiBasicTable
      tableCaption="Demo of EuiBasicTable"
      items={items}
      rowHeader="firstName"
      columns={columns}
      rowProps={getRowProps}
      cellProps={getCellProps}
    />
  );
};

export default Index;
