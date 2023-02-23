import React, { Component } from "react";

class ListTodos extends Component {
    state = {
        todos: [],
    };

    componentDidMount() {
        fetch("http://localhost:5000/todos")
        .then(response => response.json())
        .then(todos => this.setState({ todos }))
        .catch(error => console.error(error));
    }

    render() {
        const { todos } = this.state;

        return (
            <div>
                <h1>Tasks</h1>
                <ol>
                    {todos.map(todo => (
                        <li key={todo.id}>{todo.description}</li>
                    ))}
                </ol>
            </div>
        )
    }
}

export default ListTodos;