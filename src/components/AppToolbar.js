import React from "react";
import {
  GlobalHeader,
  GlobalHeaderSection,
  GlobalHeaderLogo,
  GlobalHeaderLogoImage,
  CDKLogo,
  GlobalHeaderMenu,
  GlobalHeaderMenuIcon,
  GlobalHeaderLabel,
  GlobalHeaderLabelBrand,
  GlobalHeaderLabelAppName,
  GlobalHeaderIcon
} from "@cdk-uip/react-global-header";
import { FormattedMessage } from "react-intl";
import { LinkContainer } from "react-router-bootstrap";

const AppToolbar = () => (
  <GlobalHeader>
    <GlobalHeaderSection align="start">
      <GlobalHeaderMenu>
        <GlobalHeaderMenuIcon element="span" />
      </GlobalHeaderMenu>

      <LinkContainer to="/">
        <GlobalHeaderLogo element="a">
          <GlobalHeaderLogoImage>
            <CDKLogo />
          </GlobalHeaderLogoImage>
        </GlobalHeaderLogo>
      </LinkContainer>

      <GlobalHeaderLabel>
        <GlobalHeaderLabelBrand>CDK</GlobalHeaderLabelBrand>
        <GlobalHeaderLabelAppName>
          <FormattedMessage id="App.title" defaultMessage="Web Application" />
        </GlobalHeaderLabelAppName>
      </GlobalHeaderLabel>
    </GlobalHeaderSection>

    <GlobalHeaderSection align="end" shrinkToFit>
      <LinkContainer to="/about">
        <GlobalHeaderIcon>info</GlobalHeaderIcon>
      </LinkContainer>
    </GlobalHeaderSection>
  </GlobalHeader>
);

export default AppToolbar;
