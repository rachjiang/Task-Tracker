import React, { Fragment } from 'react';
import "./App.css";
import ListTodos from './components/ListTodos';
import AddTodo from "./components/AddTodo";

function App() {
  return (
      <Fragment>
        <div className="container">
          <AddTodo />
          <ListTodos />
        </div>
      </Fragment>
  );
}

export default App;
