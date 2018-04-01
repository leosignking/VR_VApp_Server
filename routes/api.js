var express = require('express');
var router = express.Router();

/* GET list of users. */
router.get('/users', function(req, res, next) {
    console.log('inside users');
    var users = '{"name": "test", "name": "value"}'
    res.json(users);
});

module.exports = router;