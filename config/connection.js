// Dependencies
const mysql = require('mysql');

// MySQL DB Connection Information (remember to change this with our specific credentials)
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    // Be sure to update with your own MySQL password!
    password: 'octosoft',
    database: 'burgers_db',
});

// Initiate MySQL Connection.
connection.connect((err) => {
    if (err) {
      console.error(`error connecting: ${err.stack}`);
      return;
    }
    console.log(`connected as id ${connection.threadId}`);
});

// Export connection for our ORM to use.
module.exports = connection;