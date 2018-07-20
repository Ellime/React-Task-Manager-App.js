import React from "react";
import App from "../components/App";
import { connect } from "react-redux";
import IntlProvider from "@cdkglobal/react-core-intl-provider";
import { withRouter } from "react-router-dom";

class AppContainer extends React.Component {
  loadLocaleData = ({ primary, region }) => {
    // Map of locales => data
    const data = {
      en: () => import(`react-intl/locale-data/en`),
      fi: () => import(`react-intl/locale-data/fi`)
    };
    return data[primary]();
  };

  loadMessages = ({ primary, region }) => {
    const data = {
      "en-US": () => import("../i18n/en-US.json"),
      "en-GB": () => import("../i18n/en-GB.json"),
      "fi-FI": () => import("../i18n/fi-FI.json")
    };
    return (data[`${primary}-${region}`] || data[primary])();
  };

  render() {
    const { locale, language } = this.props;
    return (
      <IntlProvider
        language={language}
        locale={locale}
        loadLocaleData={this.loadLocaleData}
        loadMessages={this.loadMessages}
        defaultLocale="en"
        textComponent={React.Fragment}
      >
        <App />
      </IntlProvider>
    );
  }
}

export default withRouter(
  connect(state => ({
    language: state.i18n.language,
    locale: state.i18n.locale
  }))(AppContainer)
);
