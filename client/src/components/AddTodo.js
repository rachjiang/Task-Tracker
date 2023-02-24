import React, { Fragment, useState } from "react";

function AddTodo () {
    const [description, setDescription] = useState("")

    function handleInputChange (event) {
        setDescription(event.target.value);
    };

    async function handleSubmit (event) {
        event.preventDefault();
        try {
            const response = await fetch("http://localhost:5000/todos", {
                method: "POST",
                headers: { "Content-Type": "application/json" }, // tells the server to parse data in JSON format
                body: JSON.stringify({ description }) // convert body object into a string to send to request body
            })
            window.location = "/";
        }
        catch (err) {
            console.error(err);
        }
    }


    return (
        <Fragment>
            <div className="container pb-0">
                <form className="m-5 text-center d-flex" onSubmit={handleSubmit}>
                    <input type="text" className="form-control" placeholder="Enter a new task here to display it in the to-do list below" value={description} onChange={handleInputChange} />
                    <button type="submit" className="btn btn-success">Add Task</button>
                </form>
            </div>
        </Fragment>
    )

}

export default AddTodo;