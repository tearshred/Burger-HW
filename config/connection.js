var mysql = require("mysql");

// Create the MySQL connection object
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  // DB is local on localhost
  connection = mysql.createConnection({
    port: 3306,
    host: 'localhost',
    user: 'root',
    password: "JbJ4lif3!",
    database: "burgers_db"
  })
};

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
