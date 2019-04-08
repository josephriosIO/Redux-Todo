import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";

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

  render() {
    console.log(this.props.todo);
    return (
      <div>
        <h1>add todo</h1>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChanges}
        />
        <button onClick={this.addTodo}>add</button>
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
  { addTodo }
)(AddTodo);
