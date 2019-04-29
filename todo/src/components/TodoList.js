import React, { Component } from "react";
import Todo from "./Todo";
import { connect } from "react-redux";
import { completeTodo, getTodos } from "../actions";

class TodoList extends Component {
  componentWillMount() {
    this.props.getTodos();
  }

  changeToggle = (e, id) => {
    e.preventDefault();
    this.props.completeTodo(id);
  };

  render() {
    return (
      <ul>
        {this.props.todos.map(todo => (
          <Todo changeToggle={this.changeToggle} item={todo} />
        ))}
      </ul>
    );
  }
}
const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  { completeTodo, getTodos }
)(TodoList);
