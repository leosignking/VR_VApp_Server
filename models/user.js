var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/**
 * User Schema
 */

 var userSchema = new Schema({
     phoneNumber: {
         type: Number,
         trim: true,
         required: true
     },
     created: {
         type: Date,
         default: Date.now
     },
     updated: {
         type: Date,
         default: Date.now
     }
 });

 mongoose.model('User', userSchema);