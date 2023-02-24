import React, { Fragment, useEffect,useState } from "react";
import EditTodo from "./EditTodo"

function ListTodos () {
    const [todos, setTodos] = useState([]);

    async function getAllTodos () {
        try {
            const response = await fetch("http://localhost:5000/todos")
            const todos = await response.json();
            setTodos(todos); 
        }
        catch (err) {
            console.error(err);
        }
    }

    async function handleDelete (id) {
        try {
            const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`, {
                method: "DELETE",

            })
            setTodos(todos.filter(todo => todo.todo_id !== id));
        }
        catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        getAllTodos();
    }, []);

    console.log(todos)

    return (
        <Fragment>
            <h1 className="text-center">Tasks</h1>
            <table className="table mt-5 text-center">
                <tbody>
                {todos.map(todo => (
                    <tr key={todo.todo_id}>
                        <td key={todo.id}>{todo.description} </td>
                        <td><EditTodo todo={todo}/></td>
                        <td><button type="submit" className="btn btn-danger" onClick={() => handleDelete(todo.todo_id)}>Delete</button></td>
                    </tr>
                ))}
                </tbody>
            </table>
        </Fragment>
    )
}

export default ListTodos;