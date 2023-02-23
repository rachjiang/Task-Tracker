import React, { Component, Fragment } from "react";
import EditTodo from "./EditTodo"

class ListTodos extends Component {
    constructor() {
        super()
        this.state = {
            todos: [],
        };
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        fetch("http://localhost:5000/todos")
        .then(response => response.json())
        .then(todos => this.setState({ todos }))
        .catch(error => console.error(error));
    }

    handleDelete = async (todo) => {
        try {
            const deleteTodo = await fetch(`http://localhost:5000/todos/${todo}`, {
                method: "DELETE",
            })
            this.setState({todos: this.state.todos.filter(item => item.todo_id !== todo)});
            // console.log(this.state.todos);
        }
        catch (err) {
            console.error(err);
        }
    }

    render() {
        const { todos } = this.state;
        return (
            <Fragment>
                <h1 className="text-center">Tasks</h1>
                <table className="table mt-5 text-center">
                    <tbody>
                    {todos.map(todo => (
                        <tr key={todo.todo_id}>
                            <td key={todo.id}>{todo.description} </td>
                            <td><EditTodo /></td>
                            <td><button type="submit" className="btn btn-danger" onClick={() => this.handleDelete(todo.todo_id)}>Delete</button></td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </Fragment>
        )
    }
}

export default ListTodos;