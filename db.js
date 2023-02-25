// connect to database with pg library
const Pool = require("pg").Pool;
const dotenv = require("dotenv");
// set up environment variables
dotenv.config();

let db;

if (process.env.NODE_ENV === "production") {
// if in production mode on heroku, we need to pass in the heroku DATABASE_URL. if in dev mode, run local db
  db = new Pool({
    // value comes from heroku pg URL value for db named DATABASE_URL
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
  });
// in dev mode, pass env variables
} else {
  db = new Pool({
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    database: process.env.PG_DATABASE
  });
}

module.exports = db;