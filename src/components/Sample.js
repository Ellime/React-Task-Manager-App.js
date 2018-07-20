import React from "react";
import { Fluid, FluidItem } from "@cdk-uip/react-fluid";
import { CircularProgress } from "@cdk-uip/react-circular-progress";
import { List, ListItem } from "@cdk-uip/react-list";
import { Headline4 } from "@cdk-uip/react-typography";
import { LayoutGrid, LayoutGridCell } from "@cdk-uip/react-layout-grid";
import { Card } from "@cdk-uip/react-card";
import { Button } from "@cdk-uip/react-button";
import { FormattedMessage } from "react-intl";
import Alert from "./Alert";

const Sample = ({ isFetching, list, error, fetch, clearError, clear }) => (
  <div>
    <LayoutGrid>
      <LayoutGridCell span={12}>
        <Headline4>
          <FormattedMessage
            id="Sample.headline"
            defaultMessage="Redux Sample Page"
          />
        </Headline4>
      </LayoutGridCell>
      <LayoutGridCell span={12}>
        <Fluid halign="left" valign="middle">
          <FluidItem>
            <Button raised primary onClick={fetch}>
              <FormattedMessage id="Sample.fetch" defaultMessage="Fetch data" />
            </Button>
          </FluidItem>
          <FluidItem>
            <Button raised onClick={clear}>
              <FormattedMessage id="Sample.clear" defaultMessage="Clear data" />
            </Button>
          </FluidItem>
          <FluidItem>{isFetching && <CircularProgress />}</FluidItem>
        </Fluid>
      </LayoutGridCell>
      <LayoutGridCell span={12}>
        {list.length > 0 && (
          <Card>
            <List>
              {list.map((state, index) => (
                <ListItem key={index}>{state}</ListItem>
              ))}
            </List>
          </Card>
        )}
      </LayoutGridCell>
    </LayoutGrid>

    <Alert open={!!error} onClose={clearError} message={error} />
  </div>
);

export default Sample;
