import types from "./types";
import { combineReducers } from "redux";

const language = (state = "en-GB", action) => {
  switch (action.type) {
    case types.I18N_LANGUAGE:
      return action.language;
    default:
      return state;
  }
};

const locale = (state = "en-GB", action) => {
  switch (action.type) {
    case types.I18N_LOCALE:
      return action.locale;
    default:
      return state;
  }
};

export default combineReducers({
  language,
  locale
});

export const actions = {
  setLanguage: language => ({ type: types.I18N_LANGUAGE, language }),
  setLocale: locale => ({ type: types.I18N_LOCALE, locale })
};
