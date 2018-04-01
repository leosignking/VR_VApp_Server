var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var User = mongoose.model('User');
/**
 * Register user with Mobile Number
 */
router.post('/register', function(req, res, next) {
    console.log('User trying to register with mobile number: '+req.body);
    var newUser = new User(req.body);
    newUser.save(function(err, user) {
        if(err) {
            return res.status(400).send({
                message: err
            });
        } else {
            return res.json(user);
        }
    });
});

module.exports = router;