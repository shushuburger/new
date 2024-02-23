const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "IAABFOIU4mysql",
    database: "note",
});

connection.connect();

module.exports = connection;