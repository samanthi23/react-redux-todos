import React, { Component } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import { connect } from "react-redux";
import { addTodo, removeTodo, getTodos } from "./actionCreators";
import { Route } from "react-router-dom";

class TodoList extends Component {
  constructor(props) {
    super(props);
    // take out handleSubmit and handleChange
    // this.handleSubmit = this.handleSubmit.bind(this);
    // call this handleAdd
    // pass in a prop called addTodo 
    this.handleAdd = this.handleAdd.bind(this);
  }
  /* handleSubmit
  handleChange
  removeTodo
  as well as state ?
  */
  
  
  componentDidMount() {
    debugger;
    this.props.getTodos();
  }
  handleAdd(val) {
    this.props.addTodo(val);
  }
  // remove Todo keep
  removeTodo(id) {
    this.props.removeTodo(id);
  }
  render() {
   // debugger;
    let todos = this.props.todos.map(val => (
      <Todo
        removeTodo={this.removeTodo.bind(this, val._id)}
        task={val.task}
        key={val._id}
      />
    ));
    return (
      <div>
      /* here */
        <Route path="/todos/new" component={props => (<NewTodoForm {...props} handleSubmit={this.handleAdd} />)}/>
        <Route exact path="/todos" component={() => <div>{todos}</div>} />
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  debugger;
  return {
    todos: reduxState.todos
  };
}

export default connect(mapStateToProps, { addTodo, removeTodo, getTodos })(
  TodoList
);
