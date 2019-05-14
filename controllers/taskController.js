var express = require('express');
var router = express.Router();



var task = require('../models/tasker.js');

// Create the routes and associated logic
router.get('/', function (req, res) {
    task.selectAll(function (data) {
        var hbsObject = {
            tasks: data
        };
        console.log(hbsObject);
        res.render('index', hbsObject);
    });
});

router.post('/api/tasks', function (req, res) {
    task.insertOne([
        'taskName', 'completed'
    ], [
        req.body.taskName, req.body.completed
    ], function (data) {
        res.redirect('/');
        res.json({
            // id: result.insertId
        })
    });
});

router.put('/api/tasks/:id', function (req, res) {
    var condition = 'id = ' + req.params.id;

    task.updateOne({
        completed: true
    }, condition, function (data) {
        res.redirect('/');
    });
});

// Export routes for server.js to use.
module.exports = router;