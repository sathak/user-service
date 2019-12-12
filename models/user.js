
'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

// create a schema
var userSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        index: true,
        required: true,
        auto: true,
    },
    username: { type: String, required: true, unique: true },
    dob: { type: Date},
    email:{type: String, match: [/\S+@\S+\.\S+/, 'is invalid'], index: true},
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});
userSchema.pre('save', function(next){
    now = new Date();
    this.updated_at = now;
    next(); 
  });
// the schema is useless so far
// we need to create a model using it
var User = mongoose.model('User', userSchema);

// make this available to our users in our Node applications
module.exports = User;