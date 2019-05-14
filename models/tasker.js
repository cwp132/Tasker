// Import the ORM to implement functions that will interact with the database
// var orm = require('../config/orm.js');

// // Create the burger object
// var task = {
//     // Select all burger table entries
//     selectAll: function (cb) {
//         orm.selectAll('tasks', function (res) {
//             cb(res);
//         });
//     },


//     insertOne: function (taskName, cb) {
//         orm.insertOne('tasks', taskName, function (res) {
//             cb(res);
//         });
//     },


//     updateOne: function (id, cb) {
//         orm.updateOne('tasks', id, function (res) {
//             cb(res);
//         });
//     }
// };

var orm = require("../config/orm.js");

var task = {
    // functions that call ORM functions using specific input for the ORM
    selectAll: function (cb) {
        orm.selectAll("tasks", function (res) {
            cb(res);
        });
    },
    insertOne: function (cols, vals, cb) {
        orm.insertOne("tasks", cols, vals, function (res) {
            cb(res);
        });
    },
    updateOne: function (objColVals, condition, cb) {
        orm.updateOne("tasks", objColVals, condition, function (res) {
            cb(res)
        });
    }
}
module.exports = task;