import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

export class App extends Component {
  render() {
    return (
      <div style={centerText}>
        <TodoList />
        <TodoForm />
      </div>
    );
  }
}
const centerText = {
  textAlign: 'center'
};

const mapStateToProps = state => {
  console.log('State in Redux Sore', state);

  return { todos: state };
};

export default connect(mapStateToProps)(App);
