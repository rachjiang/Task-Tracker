import React, { Fragment, useState } from 'react';


function EditTodo (props) {
    const [description, setDescription] = useState(props.todo.description)
    const [todo, setTodos] = useState(props.todo)

    function handleDescriptionChange (event) {
        setDescription(event.target.value);
    };
    // proxy in package.json will apply http://localhost:5000 before request paths below in dev mode
    // in production, proxy doesn't apply so the paths are correct in heroku domain
    async function handleUpdates (id, event) {
        event.preventDefault();
        try {
            const body = { description }; // new description from event input changes, set in line 8
            const response = await fetch(`http://localhost:5000/todos/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body) 
            })
            window.location = "/";
        }
        catch (err) {
            console.error(err);
        }
    }

        return (
            <Fragment>
            <button type="button" className="btn btn-info" data-toggle="modal" data-target={`#id${todo.todo_id}`}>
            Edit
            </button>
    
            <div className="modal" tabIndex="-1" role="dialog" id={`id${todo.todo_id}`}> {/* defining unique modal for each id*/}
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Make changes to the to-do</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <input type="text" className="form-control" value={description} onChange={handleDescriptionChange}/>
                    </div>
                    <div className="modal-footer">
                        <button type="submit" className="btn btn-primary" onClick={(event) => handleUpdates(todo.todo_id, event)}>Save changes</button>
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
            </div>
        </Fragment> 
        )
}

export default EditTodo;