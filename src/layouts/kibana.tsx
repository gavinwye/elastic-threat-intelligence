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
      name: 'Security',
      id: htmlIdGenerator('basicExample')(),
      items: [
        // {
        //   name: 'Dashboards',
        //   id: htmlIdGenerator('basicExample')(),
        //   href: `${pathPrefix}/dashboards/`,
        // },
        // {
        //   name: 'Alerts',
        //   id: htmlIdGenerator('basicExample')(),
        //   href: `${pathPrefix}/alerts/`,
        // },
        // {
        //   name: 'Findings',
        //   id: htmlIdGenerator('basicExample')(),
        //   href: `${pathPrefix}/findings/`,
        // },
        // {
        //   name: 'Investigations',
        //   id: htmlIdGenerator('basicExample')(),
        //   href: `${pathPrefix}/investigations/`,
        // },
        // {
        //   name: 'Cases',
        //   id: htmlIdGenerator('basicExample')(),
        //   href: `${pathPrefix}/cases/`,
        // },
        // {
        //   name: 'Threat Hunting',
        //   id: htmlIdGenerator('basicExample')(),
        //   href: `${pathPrefix}/threat-hunting/`,
        // },
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
