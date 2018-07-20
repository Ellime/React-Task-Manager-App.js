import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import reducers from "./reducers";
import thunk from "redux-thunk";
import { apiMiddleware } from "@cdkglobal/react-core-reduxapi";

// Support Redux dev tools Chrome extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default initialState =>
  createStore(
    combineReducers({ ...reducers }),
    initialState,
    composeEnhancers(applyMiddleware(thunk, apiMiddleware))
  );
