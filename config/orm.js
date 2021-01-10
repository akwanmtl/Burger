// Dependencies
const connection = require("./connection.js");

// The helper functions were taken from the activity 16-MvcExample
// Function that print the number of ? separated by commas
const printQuestionMarks = (num) => {
    const arr = [];
    for (let i = 0; i < num; i++) {
      arr.push('?');
    }  
    return arr.toString();
};
  
// Function that converts object key/value pairs to SQL syntax
const objToSql = (ob) => {
    const arr = [];

    for (const key in ob) {
        let value = ob[key];
        // check to skip hidden properties
        if (Object.hasOwnProperty.call(ob, key)) {
        // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
            if (typeof value === 'string' && value.indexOf(' ') >= 0) {
                value = `'${value}'`;
            }
            arr.push(`${key}=${value}`);
        }
    }
    return arr.toString();
};

// class ORM with three functions to manipulate SQL database
const orm = {
    // select all data from the table
    selectAll(table, cb) {
        let query = `SELECT * FROM ${table}`;
        connection.query(query, (err,result)=> {
            if(err) throw err;
            cb(result)
        });
    },
    
    // isert a row into the table
    insertOne(table,cols,vals,cb) {
        let query = `INSERT INTO ${table}`;
        query += ` (${cols.toString()}) `;
        query += ` VALUES (${printQuestionMarks(vals.length)})`;
        
        connection.query(query,vals,(err,result) =>{
            if(err) throw err;
            cb(result);
        });
    },
    
    // update a row from the table
    updateOne(table,objColVals, condition, cb){
        let query = `UPDATE ${table}`;
        query += ` SET ${objToSql(objColVals)}`;
        query += ` WHERE ${condition}`

        connection.query(query,(err,result) =>{
            if(err) throw err;
            cb(result);
        });
    }
};

// export orm for model
module.exports = orm;