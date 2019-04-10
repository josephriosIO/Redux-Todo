import { ADD_TODO, COMPLETE_TODO, REMOVE_TODO, GET_TODOS } from "../actions";

const intitalState = {
  todos: []
};

const reducer = (state = intitalState, action) => {
  switch (action.type) {
    case GET_TODOS:
      return {
        ...state,
        todos: action.payload
      };
    case ADD_TODO:
      return {
        todos: [
          ...state.todos,
          { name: action.payload, id: Date.now(), completed: false }
        ]
      };
    case COMPLETE_TODO:
      const toggledTodo = [...state.todos].map(todo => {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      return {
        ...state,
        todos: toggledTodo
      };
    case REMOVE_TODO:
      const removeTodo = [...state.todos].filter(todo => {
        return !todo.completed;
      });
      return {
        ...state,
        todos: removeTodo
      };
    default:
      return state;
  }
};

export default reducer;
