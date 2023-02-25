// connect to database with pg library
const Pool = require("pg").Pool;
const dotenv = require("dotenv");
// set up environment variables
dotenv.config();

const devConfig = {
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    database: process.env.PG_DATABASE
};

// eslint-disable-next-line no-unused-vars
const proConfig = {
    connectionString: process.env.DATABASE_URL // value comes from heroku pg URL value for db named DATABASE_URL
}

const db = new Pool(process.env.NODE_ENV === "production" ? proConfig : devConfig);
// if in production mode on heroku, we need to pass in the heroku DATABASE_URL. if in dev mode, run local db

module.exports = db;