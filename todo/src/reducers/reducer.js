import { ADD_TODO, COMPLETE_TODO, DELETE_TODO } from '../actions/actions';

const initialState = [
  {
    task: 'DONT PANIC',
    completed: false,
    id: Date.now()
  }
];

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return state.concat(action.payload);
    case COMPLETE_TODO:
      return state.map(todo => {
        if (todo.id === action.payload) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });
    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.payload);
    default:
      return state;
  }
};
