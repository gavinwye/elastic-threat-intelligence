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
          rightSideItems: 
            [
            <EuiButton fill>Add feeds</EuiButton>,
           ]
      }
      }>
    <EuiCallOut>
        <h2 color='#07c'>You don't have any feeds enabled</h2>
      <p className=''>
        To see Threat Intelligence indicators here, you need to add some feeds.
      </p>
        <EuiButton href='/threat-intelligence/indicators' fill>Add Feeds</EuiButton>
    </EuiCallOut>
    </KibanaLayout>
    
  );
};

export default Index;
