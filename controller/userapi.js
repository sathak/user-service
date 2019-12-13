'use strict';

var mongoose = require('mongoose');

var User = mongoose.model('User');

exports.list_all_user = function (req, res) {
    User.find({}, function (err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
};




exports.create_a_user = function (req, res) {
    var new_user = new User(req.body);
    new_user.save(function (err, user) {
        if (err)
            res.send(err);
        //res.json(user);
        User.find({}, function (err, user) {
            if (err)
                res.send(err);
            res.json(user);
        });
    });
 
};


exports.get_a_user = function (req, res) {
    console.log(req.params.userId);
    User.findOne({ userId: req.params.userId }, function (err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
};


exports.update_a_user = function (req, res) {
    User.findOneAndUpdate({ userId: req.params.userId }, req.body, { new: true }, function (err, user) {
        if (err)
            res.send(err);
       // res.json(user);
       User.find({}, function (err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
    });
    
};


exports.delete_a_user = function (req, res) {
    User.remove({
        userId: req.params.userId
    }, function (err, User) {
        if (err)
            res.send(err);
       // res.json({ message: 'user successfully deleted' });
       User.find({}, function (err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
    });
    
};