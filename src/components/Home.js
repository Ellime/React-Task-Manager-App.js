import React from "react";
import { LayoutGrid, LayoutGridCell } from "@cdk-uip/react-layout-grid"; // CDK React component. From CDK Global.
import {
  Card,
  CardHeader,
  CardTitle,
  CardText,
} from "@cdk-uip/react-card"; // CDK React component. From CDK Global.
import { FormattedMessage, FormattedHTMLMessage } from "react-intl";
import TaskList from './TaskList';

// The appearance of the home page is defined in the Home component.
// The page is made up of LayoutGrid components with LayoutGridCell as subcomponents.
// TaskList is a component that was defined elsewhere and imported to Home.
const Home = () => ( // Home is the name of the component sent to App.js
  <LayoutGrid>
    <LayoutGridCell span={12}>
      <Card>

        {/* Title */}

        <CardHeader>
          <CardTitle large>
            <FormattedMessage id = "Card.title" />
          </CardTitle>
        </CardHeader>

        {/* Body */}

        <CardText>

          <p>Keep track of those pesky responsibilities with this handy app! When you are finished with one, check it to mark it as complete.</p>

        </CardText>

        <TaskList/>

      </Card>

    </LayoutGridCell>
  </LayoutGrid>
);

export default Home;
