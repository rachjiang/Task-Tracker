import React, { Fragment, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom"


function SingleTodo() {
  const { id } = useParams() // Returns an object of key/value pairs of the dynamic params from the current URL that were matched by the route path.
  const [todo, setTodo] = useState({});

  // fetch a single todo by id
  async function getSingleTodo (id) {
    try {
        const response = await fetch(`https://task-tracker-rj.herokuapp.com/todos/${id}`);
        const todo = await response.json();
        setTodo(todo);
        console.log(response)
    }
    catch (err) {
        console.error(err);
    }
  }

  useEffect(() => {
    getSingleTodo(id)
  }, [id]);


  return (
    <Fragment>
      <div className="container">
        <Link to="/">Back</Link>
        <table className="mt-5 table table-light table-striped table-bordered border-dark text-center">
          <thead>
            <tr className="h3 font-weight-bold">
                <th>Task</th>
            </tr>
          </thead>
            <tbody>
              <tr>
                <td>{todo.description}</td>
              </tr>
            </tbody>
          </table>
      </div>
    </Fragment>
  )
}

export default SingleTodo;