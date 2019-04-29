import React from "react";
import { connect } from "react-redux";
import { completeTodo } from "../actions";
import AddTodo from "./AddTodo";

const Todo = props => {
  return (
    <>
      <li
        className={`${props.item.completed ? "true" : null}`}
        onClick={e => props.changeToggle(e, props.item.id)}
      >
        {props.item.title}
      </li>
    </>
  );
};

const mapStateToProps = state => {
  return {
    todo: state.todos
  };
};

export default connect(
  mapStateToProps,
  { completeTodo }
)(Todo);
