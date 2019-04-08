import { ADD_TODO, COMPLETE_TODO } from "../actions";

const intitalState = {
  todos: [
    {
      name: "get milk",
      completed: false,
      id: 1
    }
  ]
};

const reducer = (state = intitalState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: [...state.todos, action.payload]
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
    default:
      return state;
  }
};

export default reducer;
