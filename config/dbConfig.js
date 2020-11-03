var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'rope_master',
});

connection.connect((err) => {
  if (!err) {
    console.log("Database is connected ...");
  } else {
    console.log("" + err + " : Error connecting database ...");
  }
});

module.exports = connection;
