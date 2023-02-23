const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./db"); // allows queries with postgres

// middleware to grab data from the client
app.use(cors());
app.use(express.json()) // access to req.body to use json data in api calls

// ROUTES //

// Getting a single to-do
app.get("/todos/:id", async(req, res) => {
    try {
        // awaiting query of specified todo based on id to complete before sending it as a response to the get request
        const { id } = req.params;
        const todo = await db.query("SELECT * FROM todo WHERE todo_id = $1", [id]);
        res.json(todo.rows[0]); // [0] since we're only querying one todo
    }
    catch(err) {
        console.log(err.message);
    }
})

// Getting multiple to-do's
app.get("/todos", async(req, res) => {
    try {
        const allTodos = await db.query("SELECT * FROM todo");
        res.json(allTodos.rows);
    }
    catch (err) {
        console.log(err.message);
    }
})

// Adding a to-do
app.post("/todos", async(req, res) => {
    try {
        const { description } = req.body; // destructuring description from request body' JSON data
        const newTodo = await db.query(
            // $# acts as a variable placeholder to specify columns to query from the table
            // RETURNING * returns the updates we've made into the "rows" property of the JSON object
            "INSERT INTO todo (description) VALUES($1) RETURNING *",[description]);
        res.json(newTodo.rows);
    }
    catch (err) {
        console.log(err.message);
    }
})

// Editing a to-do
app.put("/todos/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const { description } = req.body;
        const updateTodo = await db.query("UPDATE todo SET description = $1 WHERE todo_id = $2", [description, id]);
        res.json(`Todo #${id} was updated!`);
    }
    catch (err) {
        console.log(err.message);
    }
})

// Deleting a to-do
app.delete("/todos/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const deleteTodo = await db.query("DELETE FROM todo WHERE todo_id = $1", [id]);
        res.json(`Todo #${id} was deleted!`);
    }
    catch (err) {
        console.log(err.message);
    }
})

app.listen(5000, () => {
    console.log("server has started on port 5000");
});