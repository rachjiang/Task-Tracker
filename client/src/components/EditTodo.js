import React, { Component, Fragment } from 'react';

class EditTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            description: this.props.todo.description
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange = (event) => {
        this.setState({ description: event.target.value });
    };

    handleSubmit = async (id, event) => {
        event.preventDefault();
        try {
            const response = await fetch(`http://localhost:5000/todos/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" }, // tells the server to parse data in JSON format
                body: JSON.stringify({ description: this.state.description })
            })
            window.location = "/";
        }
        catch (err) {
            console.error(err);
        }
    }


    render() {
        const { todo } = this.props;
        const { description } = this.state;

        return (
            <Fragment>
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target={`#id${todo.todo_id}`}>
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
                        <input type="text" className="form-control" value={description} onChange={this.handleInputChange}/>
                    </div>
                    <div className="modal-footer">
                        <button type="submit" className="btn btn-primary" onClick={(event) => this.handleSubmit(todo.todo_id, event)}>Save changes</button>
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
            </div>
        </Fragment> 
        )
    }
}

export default EditTodo;