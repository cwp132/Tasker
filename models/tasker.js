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

//either tasker or task controller