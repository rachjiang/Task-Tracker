import React, { Component, Fragment } from "react";

class AddTodo extends Component {
    constructor() {
        super();
        this.state = {
            description: '',
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange = (event) => {
        this.setState({ description: event.target.value });
    };

    handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch("http://localhost:5000/todos", {
                method: "POST",
                headers: { "Content-Type": "application/json" }, // tells the server to parse data in JSON format
                body: JSON.stringify({ description: this.state.description })
            })
            window.location = "/"; // refreshes the page so component can re-render and list new to-do
        }
        catch (err) {
            console.error(err);
        }
    }


    render() {
        return (
            <Fragment>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.description} onChange={this.handleInputChange} />
                    <button>Add Task</button>
                </form>
            </Fragment>
        )
    }
}

export default AddTodo;