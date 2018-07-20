import React from "react";
import AppToolbar from "./AppToolbar";
import Home from "./Home";
import About from "./About";
import Licenses from "./Licenses";
import { Route } from "react-router-dom";

const App = () => (
  <div>
    <AppToolbar />

    <div className="mdc-toolbar-fixed-adjust">
      <Route path="/" exact component={Home} />
      {/* <Route path="/sample" component={SampleContainer} />
      <Route path="/intl" component={IntlContainer} /> */}
      <Route path="/about" component={About} />
      <Route path="/licenses" component={Licenses} />
    </div>
  </div>
);

export default App;
