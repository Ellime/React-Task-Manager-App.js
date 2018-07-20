import React from "react";
import ReactDOM from "react-dom";
import "typeface-roboto";
import "@cdk-uip/icons";
import "@cdk-uip/react/cdk.css";
import "./index.css";
import AppContainer from "./containers/AppContainer";
import { BrowserRouter as Router } from "react-router-dom";
import initStore from "./reducers/store";
import { Provider } from "react-redux";

// Create the redux store
const store = initStore();

// Render the app
ReactDOM.render(
  <Provider store={store}>
    <Router basename={process.env.PUBLIC_URL}>
      <AppContainer />
    </Router>
  </Provider>,
  document.getElementById("root")
);
