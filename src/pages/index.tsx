import { FunctionComponent } from 'react';
// import Head from 'next/head';
import { EuiSpacer } from '@elastic/eui';
import HomeHero from '../components/starter/home_hero';
import Wrapper from '../components/starter/wrapper_clean';
import HomeTemplates from '../components/starter/home_templates';
import HomeWhy from '../components/starter/home_why';
import Head from 'next/head';
import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiTitle,
  EuiText,
  useEuiTheme,
  EuiPanel,
  EuiButtonEmpty,
  EuiButton,
  EuiHorizontalRule,
  EuiAccordion,
  EuiAccordionProps,
} from '@elastic/eui';

const Index: FunctionComponent = () => {
  return (
    <>
      <Head>
        <title>Threat Intelligence prototype</title>
      </Head>

      <Wrapper>

        <EuiSpacer size="xxl" />

        <EuiTitle size="l">
          <h2>Threat Intelligence prototype </h2>
        </EuiTitle>
        <EuiSpacer size="s" />
        <EuiText>
          <p>
            This is a prototype it may not be accessible, the code quality will be low. It's intended to test the journey and play with ideas.
          </p>
        </EuiText>
        <EuiSpacer size="m" />
        <EuiHorizontalRule />
        <EuiSpacer size="m" />
        <EuiTitle size='m'>
          <h3> Getting started with Threat Intelligence</h3>
        </EuiTitle>
        <EuiSpacer size="s" />
        <EuiText>
          <p>
            8.3 release.
          </p>
        </EuiText>
        <EuiSpacer size="m" />
        <EuiText>
          <h4>
            Scenario 1
          </h4>
          <p>You're a Threat intelligence analyst and you want to add some Threat feeds to your Elastic deployment. Then start to look for data that you can use to share with the rest of your team.</p>
        </EuiText>
        <EuiSpacer size="m" />

        
        <EuiAccordion buttonContent="Work to do on this">
          <EuiText>
            <ul>
              <li>Not addressing mobile at the moment</li>
              <li>Not addressing mobile at the moment</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
            </ul>
          </EuiText>
        </EuiAccordion>

        <EuiSpacer size="m" />

        <EuiFlexGroup>
          <EuiFlexItem>
            <div>
              <EuiButton fill href='/threat-intelligence/scenario-1'>Start scenario 1</EuiButton>
            </div>
          </EuiFlexItem>
        </EuiFlexGroup>



        <EuiSpacer size="xxl" />
      </Wrapper>
    </>
  );
};

export default Index;
