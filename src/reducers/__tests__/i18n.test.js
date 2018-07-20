import reducer, { actions } from "../i18n";

it("returns the initial state", () => {
  expect(reducer(undefined, {})).toMatchSnapshot();
});

it("handles I18N_LANGUAGE", () => {
  expect(reducer(undefined, actions.setLanguage("lang"))).toMatchSnapshot();
});

it("handles I18N_LOCALE", () => {
  expect(reducer(undefined, actions.setLocale("locale"))).toMatchSnapshot();
});
