Welcome to Task Tracker!

A web-application that helps you organize tasks by allowing you to create, read, update and delete them.

## Tech stack: PostgreSQL, Express, Node, React

This app is not set up for production mode. To run, please have Postgres installed on your local machine.
Postgres Download: https://www.postgresql.org/download/

After setting up Postgres and entering root directory, please follow these instructions to run the application:

1. Open your terminal and log into Postgres with `psql -U <yourusername>`
2. Open the database.sql file, then copy and paste `CREATE DATABASE todoapp;` into the terminal after you've logged into Postgres
3. Run `\c todoapp' . You should now be connected to the database.
4. Copy and paste the rest of the SQL commands and paste it into the terminal.
Now that the database is set up locally, we need to add some environment variables for the app to connect to it:
1. Create a .env file in the root directory.
2. Copy and paste this into the .env file:
`PG_USER = yourusername
PG_PASSWORD = yourpassword
PG_HOST = localhost
PG_PORT = 5432
PG_DATABASE = todoapp`

The set up is done! Now to run the app, make sure you're still in the root directory:

### `npm install`

### `node index`

Open another tab in the terminal:

### `cd client`

### `npm install`

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


