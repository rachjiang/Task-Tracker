// connect to database with pg library
const Pool = require("pg").Pool;
const dotenv = require("dotenv");
// set up environment variables
dotenv.config();

  const db = new Pool({
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    database: process.env.PG_DATABASE
  });

module.exports = db;