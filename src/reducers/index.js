import _ from 'lodash';
import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { reducer as formReducer } from 'redux-form';
import * as actions from '../actions';

const tasks = handleActions({
  [actions.addTask](state, { payload: { task } }) {
    return { ...state, [task.id]: task };
  },
  [actions.removeTask](state, { payload: { id } }) {
    return _.omit(state, id);
  },
  [actions.toggleTaskState](state, { payload: { id } }) {
    const task = state[id];
    const newState = task.state === 'active' ? 'finished' : 'active';
    const updatedTask = { ...task, state: newState };
    return { ...state, [task.id]: updatedTask };
  },
}, {});

export default combineReducers({
  form : formReducer, //reduxForm reducer also must be added to use NewTaskForm component properly.
  tasks,
});
