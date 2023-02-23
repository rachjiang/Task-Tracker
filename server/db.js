// connect to database with pg library

const Pool = require("pg").Pool;

const db = new Pool({
    user: "rachel",
    password: "rachel123",
    host: "localhost",
    port: 5432,
    database: "todo-list"
})

module.exports = db;