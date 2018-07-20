import React from "react";
import Alert from "../Alert";
import { Button } from "@cdk-uip/react-button";
import { storiesOf } from "@storybook/react";

storiesOf("Alert", module).add("alert", () => {
  class Wrapper extends React.Component {
    state = { open: false };
    render() {
      return (
        <div>
          <Button onClick={() => this.setState({ open: true })}>
            Show alert
          </Button>
          <Alert
            open={this.state.open}
            message="Hello, world!"
            onClose={() => this.setState({ open: false })}
          />
        </div>
      );
    }
  }
  return <Wrapper />;
});
