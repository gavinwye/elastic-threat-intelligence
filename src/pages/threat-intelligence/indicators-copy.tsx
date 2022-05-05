import { FunctionComponent } from 'react';
import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiCard,
  EuiIcon,
  EuiButton,
  EuiSpacer,
  EuiFieldSearch,
  EuiText,
} from '@elastic/eui';
import KibanaLayout from "../../layouts/kibana";
import { EuiSideNav, htmlIdGenerator } from '@elastic/eui';

const pathPrefix = process.env.PATH_PREFIX;

const Index: FunctionComponent = () => {
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

    </KibanaLayout>
  );
};

export default Index;
