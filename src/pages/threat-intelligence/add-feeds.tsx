import { FunctionComponent } from 'react';
import { EuiFlexGroup, EuiFlexItem, EuiCard, EuiIcon, EuiPageHeader, EuiButton, EuiCallOut, EuiLink, EuiTitle, EuiText, } from '@elastic/eui';
import KibanaLayout from '../../layouts/kibana';
import { EuiSideNav, htmlIdGenerator } from '@elastic/eui';

const pathPrefix = process.env.PATH_PREFIX;

const Index: FunctionComponent = () => {
  return (
    <KibanaLayout
      pageHeader={
        {
        pageTitle: 'Threat Intelligence',
          // rightSideItems: 
          //   [
          //   <EuiButton fill>Add feeds</EuiButton>,
          //  ]
      }
      }>

      <EuiText>
        <h2>This is a prototype</h2>
        <p>You're now going through the process of adding feeds in the integrations section of the app</p>
        <p><a href="/threat-intelligence/indicators">Continue</a></p>
      </EuiText>

    </KibanaLayout>
    
  );
};

export default Index;
