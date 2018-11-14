import { connect } from 'react-redux';
import Component from '../components/NewTaskForm.jsx';
import * as actionCreators from '../actions';

const mapStateToProps = () => {
  const props = {};
  return props;
};

const Container = connect(
  mapStateToProps,
  actionCreators, //actionCreators are added to state directly so no need to use redux dispatch() func.
)(Component);

export default Container;