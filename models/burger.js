// Dependencies
const orm = require("../config/orm.js");

// Model burger with the database table included
const burger = {
    selectAll(cb) {
        orm.selectAll('burgers', (res) => cb(res));
    },
    insertOne(cols,vals,cb) {
        orm.insertOne('burgers', cols, vals, (res) => cb(res));
    },
    updateOne(objColVals, condition, cb) {
        orm.updateOne('burgers', objColVals, condition, (res)=> cb(res));
    }
};

// Export burger for controller
module.exports = burger;