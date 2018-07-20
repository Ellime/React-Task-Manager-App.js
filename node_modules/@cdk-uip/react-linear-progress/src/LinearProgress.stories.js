import React from "react";
import { LinearProgress } from ".";
import { storiesOf } from "@storybook/react";
import { withKnobs, boolean, number } from "@storybook/addon-knobs";

storiesOf("linear-progress", module)
  .addDecorator(withKnobs)
  .add("props", () => (
    <LinearProgress
      indeterminate={boolean("indeterminate", true)}
      reversed={boolean("reversed", false)}
      progress={number("progress", 0.0, {
        range: true,
        min: 0,
        max: 1,
        step: 0.01
      })}
      buffer={number("buffer", 0.0, {
        range: true,
        min: 0,
        max: 1,
        step: 0.01
      })}
      closed={boolean("closed", false)}
    />
  ));
