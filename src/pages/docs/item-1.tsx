import { FunctionComponent } from 'react';
import { EuiFlexGroup, EuiFlexItem, EuiCard, EuiIcon } from '@elastic/eui';
import KibanaLayout from '../../layouts/kibana';
import { EuiSideNav, htmlIdGenerator } from '@elastic/eui';

const pathPrefix = process.env.PATH_PREFIX;

const Index: FunctionComponent = () => {
  const sideNav = [
    {
      name: 'Nav',
      id: htmlIdGenerator('basicExample')(),
      items: [
        {
          name: 'Item 1',
          id: htmlIdGenerator('basicExample')(),
          href: `${pathPrefix}/kibana/item-1`,
        },
        {
          name: 'Page 2',
          id: htmlIdGenerator('basicExample')(),
          href: `${pathPrefix}/docs/page-2`,
        },
      ],
    },
  ];
  return (
    <KibanaLayout
      // pageSideBar={sideNav}
      pageSideBar={<EuiSideNav mobileTitle="Nav Items" items={sideNav} />}
      pageHeader={{
        pageTitle: 'item 1',
      }}>
      <EuiFlexGroup gutterSize="l">
        <EuiFlexItem>
          <EuiCard
            icon={<EuiIcon size="xxl" type="discoverApp" />}
            title="Discover"
            description="Example of a card's description. Stick to one or two sentences."
          />
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiCard
            icon={<EuiIcon size="xxl" type="dashboardApp" />}
            title="Dashboards"
            description="Example of a card's description. Stick to one or two sentences."
          />
        </EuiFlexItem>

        <EuiFlexItem>
          <EuiCard
            icon={<EuiIcon size="xxl" type="lensApp" />}
            title="Lens"
            description="Example of a card's description. Stick to one or two sentences."
          />
        </EuiFlexItem>
      </EuiFlexGroup>
    </KibanaLayout>
  );
};

export default Index;
