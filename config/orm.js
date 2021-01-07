// Dependencies
const connection = require("connection");

const orm = {
    selectAll(table, cb) {
        let query = `SELECT * FROM ${table}`;
        connection.query(query, (err,res)=> {
            if(err) throw err;
            cb(res)
        });
    },
    insertOne(table,cols,vals,cb) {
        let query = `INSERT INTO ${table}`;
        query += ` (${cols.toString()})`;
        query += `VALUES`
    }
};

module.exports = orm;