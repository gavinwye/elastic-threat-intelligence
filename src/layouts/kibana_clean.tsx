import { FunctionComponent } from 'react';
import CollapsibleNav from './kibana_collapsible_nav';
import { kibanaLayoutStyles } from './kibana.styles';
import { EuiPageTemplate, EuiPageTemplateProps, htmlIdGenerator, EuiSideNav } from '@elastic/eui';
const pathPrefix = process.env.PATH_PREFIX;

type KibanaLayoutProps = EuiPageTemplateProps;

const KibanaLayout: FunctionComponent<KibanaLayoutProps> = ({
  children,
  ...rest
}) => {
  const styles = kibanaLayoutStyles();

  const sideNav = [
    {
      // name: 'Nav',
      id: htmlIdGenerator('basicExample')(),
      items: [
        {
          name: 'Threat Intelligence',
          id: htmlIdGenerator('basicExample')(),
          href: `${pathPrefix}/threat-intelligence/`,
        },
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
    <div css={styles.mainWrapper}>
      <CollapsibleNav />

      <div css={styles.contentWrapper}>
        <EuiPageTemplate restrictWidth pageSideBar={<EuiSideNav mobileTitle="Nav Items" items={sideNav} />} {...rest}>
          
          {children}
        </EuiPageTemplate>
      </div>
    </div>
  );
};

  


export default KibanaLayout;
