export const ADD_TODO = "ADD_TODO";
export const COMPLETE_TODO = "COMPLETE_TODO";

export const addTodo = name => {
  console.log(name);
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
