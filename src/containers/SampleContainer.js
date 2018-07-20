import Sample from "../components/Sample";
import { connect } from "react-redux";
import { actions } from "../reducers/states";

export default connect(
  // mapStateToProps
  state => ({
    list: state.states.list,
    isFetching: state.states.status.isFetching,
    error: state.states.status.error
  }),
  // Inject all actions into the component
  actions
)(Sample);
