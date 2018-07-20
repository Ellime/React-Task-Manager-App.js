import types from "./types";
import { combineReducers } from "redux";
import getStates from "../api/getStates";
import { CALL_API } from "@cdkglobal/react-core-reduxapi";

// The list of states fetched via an API call
const list = (state = [], action) => {
  switch (action.type) {
    case types.STATES_GET_RECEIVE:
      return action.response || [];
    case types.STATES_CLEAR:
      return [];
    default:
      return state;
  }
};

// The API call status
const status = (state = { isFetching: false, error: "" }, action) => {
  switch (action.type) {
    case types.STATES_GET_REQUEST:
      return { isFetching: true, error: "" };
    case types.STATES_GET_RECEIVE:
      return { isFetching: false, error: "" };
    case types.STATES_GET_ERROR:
      return { isFetching: false, error: action.apierror.message };
    case types.STATES_CLEAR_ERROR:
      return { ...state, error: "" };
    default:
      return state;
  }
};

export default combineReducers({
  list,
  status
});

export const actions = {
  fetch: () => ({
    [CALL_API]: {
      ...getStates(),
      types: [
        types.STATES_GET_REQUEST,
        types.STATES_GET_RECEIVE,
        types.STATES_GET_ERROR
      ]
    }
  }),
  clearError: () => ({ type: types.STATES_CLEAR_ERROR }),
  clear: () => ({ type: types.STATES_CLEAR })
};
