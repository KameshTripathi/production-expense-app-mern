// import mongoose to create schema. Schema contains json objects as key value pairs.
const mongoose = require('mongoose')


// designing schema 
const userSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: [true, 'name is required']    // means user has to input a name else a message is shown.
    }, 
    email: {
        type: String,
        required: [true, 'email is required and should be unique'], 
        unique: true
    }, 
    password: {
        type: String, 
        required: [true, 'password is required']
    }
}, {timestamps: true})  // to capture the date of record creation


// create model
const userModel = mongoose.model('users', userSchema)   // We tell mongoose that it is a model with name users which we have already created. userSchema is the reference which contains key value pairs.


// export userModel
module.exports = userModel   