import React from 'react';

const filters = [['all', 'all'], ['active', 'active'], ['finished', 'finished']];

export default class TasksList extends React.Component {
  constructor() {
  super();
  this.state = { activeFilter: 'all' }; //default filter is 'all'. 
  }

  removeTask = id => (e) => {
    e.preventDefault();
    this.props.removeTask({ id }); //delete a task from state.
  }

  toggleTaskState = id => (e) => {
    e.preventDefault();
    this.props.toggleTaskState({ id }); //change task's state. 
  }

  applyFilter(state) {
    this.setState({ activeFilter: state }); 
  }

  renderTasks() {
    const rawTasks = this.props.tasks;
    const filter = this.state.activeFilter;
    const tasks = filter === 'all' ? rawTasks : rawTasks.filter(t => t.state === filter); //filter tasks array to remove element not in a proper state. 

    return (
      <ul className="tasksList">
        {tasks.map(({ id, text, state }) => (
          <li key={id} className="taskMainField">
            <button className="taskRemoveButton" onClick={this.removeTask(id)}>x</button>
            <button className="toggleButton" onClick={this.toggleTaskState(id)}>-</button>
            <div className="taskText">{(state === 'finished' ? <s>{text}</s> : text)}</div>  
          </li>
        ))}
      </ul>);
  }

  renderFilter([state, name]) {
    if (this.state.activeFilter === state) {
      return name;
    }
    return (
      <button
        key={state}  //for key attr that should be unique for each element in a collection state definition is used. 
        className={`filterButton`}
        onClick={() => this.applyFilter(state)}
      >
        {name}
      </button>);
  }

  render() {
    const { tasks } = this.props;

    if (tasks.length === 0) {
      return null;
    }

    return (
      <div className="filterButtons">
       <div className="filterButtonsField">
          {filters.map(filter => this.renderFilter(filter))}
        </div>
        {this.renderTasks()}
       
      </div>
    );
  }
}
