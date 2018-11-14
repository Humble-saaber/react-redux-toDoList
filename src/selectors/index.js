import { createSelector } from 'reselect';

export const getTasks = state => state.tasks; // it is necessary to export getTasks too so it can be used in container component. 
export const tasksSelector = createSelector(
  getTasks,
  tasks => Object.values(tasks),
);
