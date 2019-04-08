import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo, removeTodo } from "../actions";

class AddTodo extends Component {
  state = {
    name: ""
  };

  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addTodo = e => {
    e.preventDefault();

    this.props.addTodo(this.state.name);

    this.setState({
      name: ""
    });
  };

  removeTodo = e => {
    e.preventDefault();

    this.props.removeTodo(this.props.todo);
  };

  render() {
    console.log(this.state.name);
    return (
      <div>
        <h1>todo List</h1>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChanges}
        />
        <button onClick={this.addTodo}>add</button>
        <button onClick={e => this.removeTodo(e)}>remove</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todo: state.todos
  };
};

export default connect(
  mapStateToProps,
  { addTodo, removeTodo }
)(AddTodo);
