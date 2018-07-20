import React from "react";
import Sample from "../Sample";
import { storiesOf } from "@storybook/react";

storiesOf("Sample", module)
  .add("fetching", () => <Sample isFetching list={[]} />)
  .add("error", () => <Sample error="An error" list={[]} />)
  .add("list", () => <Sample list={["Item 1", "Item 2", "Item 3"]} />);
