import React from 'react';
import NewTaskFormContainer from '../containers/NewTaskForm.js';
import TasksListContainer from '../containers/TasksList.js';

const App = () => {
 return ( 
<div className="mainField">
  <NewTaskFormContainer />
  <TasksListContainer />
</div>
 )
};

export default App;
