import reducer, { actions } from "../states";
import types from "../types";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { apiMiddleware } from "@cdkglobal/react-core-reduxapi";

const middlewares = [thunk, apiMiddleware];
const mockStore = configureMockStore(middlewares);

it("returns the initial state", () => {
  expect(reducer(undefined, {})).toMatchSnapshot();
});

it("handles STATES_GET_REQUEST", () => {
  expect(
    reducer(undefined, { type: types.STATES_GET_REQUEST })
  ).toMatchSnapshot();
});

it("handles STATES_GET_RECEIVE", () => {
  expect(
    reducer(undefined, {
      type: types.STATES_GET_RECEIVE,
      response: ["a", "b", "c"]
    })
  ).toMatchSnapshot();
});

it("handles STATES_GET_ERROR", () => {
  expect(
    reducer(undefined, {
      type: types.STATES_GET_ERROR,
      apierror: { message: "error" }
    })
  ).toMatchSnapshot();
});

it("handles STATES_CLEAR_ERROR", () => {
  expect(
    reducer(
      { list: [], status: { isFetching: false, error: "error" } },
      actions.clearError()
    )
  ).toMatchSnapshot();
});

it("handles STATES_CLEAR", () => {
  expect(reducer({ list: ["a", "b", "c"] }, actions.clear())).toMatchSnapshot();
});

it("fetches states", async () => {
  fetch.mockResponse(JSON.stringify(["a", "b", "c"]));
  const store = mockStore({});
  await store.dispatch(actions.fetch());
  expect(store.getActions()).toMatchSnapshot();
});

it("handles fetch errors", async () => {
  fetch.mockReject(new Error("An error occurred"));
  const store = mockStore({});
  await store.dispatch(actions.fetch());
  expect(store.getActions()).toMatchSnapshot();
});
