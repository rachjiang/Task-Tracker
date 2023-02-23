import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import "./App.css";
import ListTodos from './components/ListTodos';
import InputTodo from "./components/AddTodo";

function App() {
  return (
      <Fragment>
        <div className="container">
          <ListTodos />
          <InputTodo />
        </div>
      </Fragment>
  );
}

export default App;
