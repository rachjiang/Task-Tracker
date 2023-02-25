import React, { Fragment, useEffect,useState } from "react";
import { Link } from 'react-router-dom';
import EditTodo from "./EditTodo"

function ListTodos () {
    const [todos, setTodos] = useState([]);

    async function getAllTodos () {
        try {
            const response = await fetch("/todos")
            const todos = await response.json();
            setTodos(todos); 
        }
        catch (err) {
            console.error(err);
        }
    }

    async function handleDelete (id) {
        try {
            // eslint-disable-next-line no-unused-vars
            const deleteTodo = await fetch(`/todos/${id}`, {
                method: "DELETE",

            })
            setTodos(todos.filter(todo => todo.todo_id !== id));
        }
        catch (err) {
            console.error(err);
        }
    }

    function handleCheckboxChange (id) {
        setTodos(todos.map(todo => {
            if (todo.todo_id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        }))
    }

    useEffect(() => {
        getAllTodos();
    }, []);

    console.log(todos)

    return (
        <Fragment>
            <div className="container">
                <table className="table table-light table-striped table-bordered border-dark text-center">
                    <thead>
                        <tr className="h3 font-weight-bold">
                            <th>Status</th>
                            <th>Tasks</th>
                            <th>Update</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                    {todos.map(todo => (
                        <tr key={todo.todo_id}>
                            <td><input className="mx-5" type="checkbox" checked={todo.completed} onChange={() => handleCheckboxChange(todo.todo_id)} /></td>
                            <td><Link to={`todos/${todo.todo_id}`}>{todo.description}</Link></td>
                            <td><EditTodo todo={todo}/></td>
                            <td><button type="submit" className="btn btn-danger" onClick={() => handleDelete(todo.todo_id)}>Delete</button></td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </Fragment>
    )
}

export default ListTodos;