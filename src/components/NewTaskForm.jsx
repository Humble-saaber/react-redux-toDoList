import React from 'react';
import { Field, reduxForm } from 'redux-form';

class NewTaskForm extends React.Component {
  addTask = (values) => {
    this.props.addTask(values);
    this.props.reset(); // To refresh input field after dispatching any action, reset method should be used.
  }

  render() {
    return (
      <form className="formField" onSubmit={this.props.handleSubmit(this.addTask)}> {/* handleSubmit is a func of redux-form. It must be used for any action we want to dispatch.*/}
        <div className="inputField">
          <Field name="text" required component="input" type="text" />  {/*Field Component is a part of redux-form package. We do not need to define a special input-tracking method for it. */}
        </div>
        <button type="submit" className="formSubmitButton">Add</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'newTask',
})(NewTaskForm); //For using redux-form properly, we should wrap our component into reduxForm component. 



