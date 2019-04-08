export const ADD_TODO = "ADD_TODO";
export const COMPLETE_TODO = "COMPLETE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";

export const addTodo = name => {
  return {
    type: ADD_TODO,
    payload: { name, id: Date.now(), completed: false }
  };
};

export const completeTodo = id => {
  console.log("raN!");
  return {
    type: COMPLETE_TODO,
    payload: id
  };
};

export const removeTodo = () => {
  return {
    type: REMOVE_TODO
  };
};
