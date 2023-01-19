// require modules for the Submission Model
let mongoose = require('mongoose');

let Submission = mongoose.Schema
(
    {
        name: 
        {
            type: String,
            default: '',
            trim: true,
            required: 'name is required'
        },
        
       email: 
       {
            type: String,
            default: '',
            trim: true,
            required: 'email address is required'
       },
       message: 
       {
            type: String,
            default: '',
            trim: true,
            required: 'message is required'
       },
       created: 
       {
            type: Date,
            default: Date.now
       },
       update: 
       {
            type: Date,
            default: Date.now
       }
    },
    {
        collection: "submissions"
    }
);


module.exports.Submission = mongoose.model('Submission', Submission);