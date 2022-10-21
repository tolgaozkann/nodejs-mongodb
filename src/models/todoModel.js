const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
        },
    description:{
        type: String,
        required: true,
        trim: true
    },
    complated:{
        type:Boolean,
        default: false
    }
},{collection:"Todo",timestamps:true});

module.exports = mongoose.model('Todo',todoSchema);