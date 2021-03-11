import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import TodoList from "./TodoList";
// import Link, Route, Redirect components
import { Link, Route, Redirect } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome to the App!</h1>
        <p>
          <Link to="/todos">See my todos!</Link>
        </p>
        <p>
        // See my todos
          <Link to="/todos">See my todos!</Link>
        </p>
        <p>
        <Link to="/todos/new">Add a todos! </Link>

        </p>
        
        // then use the route component, 
        // when we go to /todos render an component
        // by the name of todo list
        <Route path="/todos" component={TodoList} />
        // here we go if you go exactly to path="/", well let's render a component
        // run a function redirect to
        <Route exact path="/" render={() => <Redirect to="/todos" />} />
      </div>
    );
  }
}

export default App;
