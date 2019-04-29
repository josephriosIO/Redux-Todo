import axios from "axios";

export const ADD_TODO = "ADD_TODO";
export const COMPLETE_TODO = "COMPLETE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const GET_TODOS = "GET_TODOS";

export const getTodos = () => async dispatch => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
  dispatch({
    type: GET_TODOS,
    payload: res.data
  });
};

export const addTodo = name => {
  return {
    type: ADD_TODO,
    payload: name
  };
};

export const completeTodo = id => {
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
