import React, { Fragment } from 'react';
import "./App.css";
import ListTodos from './components/ListTodos';
import AddTodo from "./components/AddTodo";
import SingleTodo from './components/SingleTodo';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Fragment>
        <div className="App">
          <h1 className="pt-5">Welcome to Task Tracker!</h1>
          <AddTodo />
          <Routes>
            <Route path="/" element={<ListTodos />} />
            <Route exact path="/todos/:id" element={<SingleTodo />} />
          </Routes>
          <footer className="pb-5">© 2023 Made by Rachel Jiang</footer>
        </div>
      </Fragment>
    </Router>
  );
}

export default App;
