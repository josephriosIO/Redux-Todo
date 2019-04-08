import React, { Component } from "react";
import { connect } from "react-redux";

class TodoList extends Component {
  render() {
    return <h1>{this.props.todos}</h1>;
  }
}
const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  {}
)(TodoList);
