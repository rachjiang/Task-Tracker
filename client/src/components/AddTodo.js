import React, { Component, Fragment } from "react";
import axios from "axios";

class InputTodo extends Component {
    constructor() {
        super();
        this.state = {
            description: '',
        };
    }

    render() {
        return (
            <Fragment>
                <form>
                    <input type="text" />
                    <button>Add</button>
                </form>
            </Fragment>
        )
    }
}

export default InputTodo;