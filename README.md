# UGrow 

Everything we need for u and growing.

Dope right?


# Backend

## Installing dependencies

Have npm installed and a Postgres instance running.

Before installing dependencies, set the current node enviornment to either development or production. The development enviornment includes sequelize-cli.

```
NODE_ENV=development
```

Use npm to install all dependencies.

```
cd backend; npm install
```

## Configuration

Set up the connection to the datatbase through the backend/db/config/config.json file. For a template, use the config.json.example file provided.

## Running the Server

To run the server, run:

```
./backend/bin/www
```

The server is run on port 3000.



