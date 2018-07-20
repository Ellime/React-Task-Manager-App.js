import React from "react";
import Intl from "../Intl";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

storiesOf("Intl", module).add("Intl", () => (
  <Intl
    language="en-GB"
    locale="en-GB"
    setLocale={action("setLocale")}
    setLanguage={action("setLanguage")}
  />
));
