import { FunctionComponent } from 'react';
import { EuiFlexGroup, EuiFlexItem, EuiCard, EuiIcon, EuiPageHeader, EuiButton, EuiCallOut, EuiLink, EuiTitle, } from '@elastic/eui';
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
              href: '/threat-intelligence/indicators',
            },
            {
              label: 'Feeds',
              isSelected: true,
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

export default Index;
