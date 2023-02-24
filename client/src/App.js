import React, { Fragment } from 'react';
import "./App.css";
import ListTodos from './components/ListTodos';
import AddTodo from "./components/AddTodo";

function App() {
  return (
      <Fragment>
        <div className="App">
          <h1 className="pt-5">Welcome to Task Tracker!</h1>
          <AddTodo />
          <ListTodos />
        </div>
      </Fragment>
  );
}

export default App;
