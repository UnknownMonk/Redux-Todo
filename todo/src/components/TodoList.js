import React from 'react';
import { connect } from 'react-redux';
import { completeTodo, deleteTodo } from '../actions/actions';

const TodoList = props => {
  return (
    <div>
      {props.todos.map(todo => (
        <div
          style={todo.completed ? { textDecoration: 'line-through' } : null}
          onClick={() => props.completeTodo(todo.id)}
          key={todo.id}
        >
          {' '}
          <h2 style={evenButton}>
            {todo.task}{' '}
            <button style={delBtn} onClick={() => props.deleteTodo(todo.id)}>
              x
            </button>
          </h2>
        </div>
      ))}
    </div>
  );
};

const evenButton = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

const delBtn = {
  margin: '0 10px',
  borderStyle: 'none',
  backgroundColor: 'rgba(173,216,230 ,.2 )',
  color: 'red',
  fontWeight: 'bold',
  fontSize: '20px'
};

const mapStateToProps = state => {
  return {
    todos: state
  };
};

export default connect(
  mapStateToProps,
  { completeTodo, deleteTodo }
)(TodoList);
