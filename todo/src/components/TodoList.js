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
          <h2>
            {todo.task}{' '}
            <button onClick={() => props.deleteTodo(todo.id)}>x</button>
          </h2>
        </div>
      ))}
    </div>
  );
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
