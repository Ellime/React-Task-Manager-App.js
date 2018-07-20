import React from "react";
import { LayoutGrid, LayoutGridCell } from "@cdk-uip/react-layout-grid";

import {
  Card,
  CardHeader,
  CardTitle,
  CardSubtitle,
  CardText,
  CardActions,
  CardActionButton
} from "@cdk-uip/react-card";

import { FormattedMessage, FormattedHTMLMessage } from "react-intl";
import { LinkContainer } from "react-router-bootstrap";

const About = () => (
  <LayoutGrid>
    <LayoutGridCell span={12}>
      <Card>
        <CardHeader>
          <CardTitle large>
            <FormattedMessage
              id="About.title"
              defaultMessage="CDK Web Application"
            />
          </CardTitle>
          <CardSubtitle>
            <FormattedMessage
              id="About.version"
              defaultMessage="Version {version}"
              values={{ version: process.env.REACT_APP_VERSION }}
            />
          </CardSubtitle>
        </CardHeader>
        <CardText>
          <FormattedHTMLMessage
            id="About.copyright"
            defaultMessage="Copyright © 2017-present <a href='http://cdkglobal.com/'>CDK Global</a>. All rights reserved."
          />
        </CardText>
        <CardActions>
          <LinkContainer to="/licenses" activeClassName="">
            <CardActionButton>Open Source Licenses</CardActionButton>
          </LinkContainer>
        </CardActions>
      </Card>
    </LayoutGridCell>
  </LayoutGrid>
);

export default About;
