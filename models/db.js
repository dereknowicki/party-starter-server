const mysql = require("mysql");

// Create a connection to the database
const pool = mysql.createPool({
  host: process.env.MYSQL_HOST_IP,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

// open the MySQL connection
pool.getConnection(function (err, connection) {
  if (err) throw err; // not connected!
  console.log('connected as id ' + connection.threadId);
});


//connection.connect(error => {
//   if (error) throw error;
//   console.log("Successfully connected to the database.");
//});



// this is how we use import
module.exports = pool;
