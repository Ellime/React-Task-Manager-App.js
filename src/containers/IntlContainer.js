import Intl from "../components/Intl";
import { connect } from "react-redux";
import { actions } from "../reducers/i18n";

export default connect(
  state => ({
    language: state.i18n.language,
    locale: state.i18n.locale
  }),
  actions
)(Intl);
