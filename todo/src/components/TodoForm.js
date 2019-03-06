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
          style={ipStyle}
          onChange={this.handleTaskChange}
          placeholder="Add Todo"
          value={this.state.task}
        />
        <button style={addBtn} onClick={this.submitTodo}>
          Add Todo
        </button>
      </div>
    );
  }
}

const ipStyle = {
  borderStyle: 'none',
  textAlign: 'center'
};

const addBtn = {
  borderStyle: 'none',
  margin: '10px 10px',
  backgroundColor: 'rgba(173,200,255 ,.9 )',
  border: '2px solid rgba(173,200,200 ,.9 )'
};

export default connect(
  null,
  { addTodo }
)(TodoForm);
