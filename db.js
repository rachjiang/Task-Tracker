// connect to database with pg library
const Pool = require("pg/lib").Pool;
const dotenv = require("dotenv");
// set up environment variables
dotenv.config();

const db = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: "localhost",
    port: 5432,
    database: "todo-list"
})

module.exports = db;