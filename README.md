# Welcome to Task Tracker!

A web-application that helps you organize tasks by allowing you to create, read, update and delete them.

## Tech stack: PostgreSQL, Express, Node, React

This app is not set up for production mode. To run, please have Postgres installed on your local machine.
Postgres Download: https://www.postgresql.org/download/

After setting up Postgres, open your terminal and please follow these instructions to set up the application:

1. Log into Postgres with `psql -U <yourusername>`
2. Create a database with `CREATE DATABASE todoapp;` in the terminal
3. Run `\c todoapp' . You should now be connected to the database.
4. Create a table in terminal with `CREATE TABLE todo(todo_id SERIAL PRIMARY KEY, description VARCHAR(255), completed BOOLEAN DEFAULT false);`
Now that the database is set up, we need to add some environment variables for the app to connect to it:
5. `\q` to exit psql and `cd` into todo-app's root directory.
6. Create a .env file in the root directory.
7. Copy and paste these environment variables into the .env file and replace `<yourusername>` and `<yourpassword>` with your own Postgres username and password:
- `PG_USER = <yourusername>`
- `PG_PASSWORD = <yourpassword>`
- `PG_HOST = localhost`
- `PG_PORT = 5432`
- `PG_DATABASE = todoapp`

The set up is done! Now to run the app, make sure you're still in the root directory:

### `npm install`

### `node index`

Open another tab in the terminal:

### `cd client`

### `npm install`

### `npm start`

The app is now running in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


