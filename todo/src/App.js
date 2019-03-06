import React, { Component } from 'react';

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
  width: '50%',
  margin: '0 auto',
  textAlign: 'center',
  marginTop: '90px',
  border: '1px solid 173,216,0 ,.7',
  backgroundColor: 'rgba(173,216,230 ,.7 )',
  borderRadius: '5px'
};

export default App;
