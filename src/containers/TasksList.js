import { connect } from 'react-redux';
import Component from '../components/TasksList.jsx';
import * as actionCreators from '../actions';
import { tasksSelector } from '../selectors';

const Container = connect(
  (state) => {
    const props = {
      tasks: tasksSelector(state), //additional selector is added to transfer only part of of main state which is needed for a component. 
    };
    return props;
  },
  actionCreators,
)(Component);

export default Container;