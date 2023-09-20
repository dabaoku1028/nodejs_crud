const mongoose = require("mongoose");

// Define Member Schema
const memberSchema = mongoose.Schema({
    "name":{
        type: String,
        require: true
    },
    "email":{
        type: String,
        require: true 
    },
    "birthday":{
        type: Date,
        require: true,
        default: '1970-01-01'
    }
})

module.exports = mongoose.model('member', memberSchema);