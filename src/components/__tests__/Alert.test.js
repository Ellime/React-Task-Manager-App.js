import React from "react";
import TestUtils from "react-dom/test-utils";
import { IntlProvider } from "react-intl";
import Alert from "../Alert";

it("renders", () => {
  TestUtils.renderIntoDocument(
    <IntlProvider locale="en">
      <Alert open message="Test" />
    </IntlProvider>
  );
});
