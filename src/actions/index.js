import _ from 'lodash';
import { createAction } from 'redux-actions';

export const addTask = createAction('TASK_ADD', task =>
  ({ task: { ...task, state: 'active', id: _.uniqueId() } })); //additional func (the second argument) is used to define a default state and a unique id which later will be used as a key attr. 
export const removeTask = createAction('TASK_REMOVE');
export const toggleTaskState = createAction('TASK_STATE_TOGGLE');