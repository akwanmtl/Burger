// Dependencies
const mysql = require('mysql');
let connection;
// MySQL DB Connection Information (remember to change this with our specific credentials)

if(process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL)
}
else {
  connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'octosoft',
    database: 'burgers_db',
  });
}


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