
const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({

        nickname: {
            type: String,
            unique: true
        },

        name: {
            type: String,
            required: true
        },

        lastName: {
            type: String,
            required: true
        },

       age: {
            type: Number,
            default: 16
       },

       email: {
            type: String,
            required: true
       }

}, {versionKey: false})

module.exports = mongoose.model('users', UserSchema)