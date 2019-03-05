import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/actions';

class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
      task: ''
    };
  }

  handleTaskChange = e => {
    this.setState({ task: e.target.value });
  };

  submitTodo = () => {
    const { task } = this.state;
    const newTask = { task, completed: false, id: Date.now() };
    this.props.addTodo(newTask);
    this.setState({ task: '' });
  };
  render() {
    return (
      <div>
        <input
          onChange={this.handleTaskChange}
          placeholder="Add Todo"
          value={this.state.task}
        />
        <button onClick={this.submitTodo}>Add Todo</button>
      </div>
    );
  }
}

export default connect(
  null,
  { addTodo }
)(TodoForm);
