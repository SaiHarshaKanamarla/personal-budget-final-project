const mongoose = require('mongoose');


const feedbackSchema = mongoose.Schema({
    _id:{
        type: String,
        required : false,
        trim : true,        
    },
    username :{
        type: String,
        required : true,
        trim: true,        
    },
    email :{
        type : String,
        required : true,
        unique:true,
        match:[/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,"Invalid Email Format"]        
    },
    description:{
        type:String,
        required: true,
        trim:true,        
    }
},{collection : 'feedback'})

const feedbackModel = mongoose.model('feedback',feedbackSchema);

module.exports = feedbackModel;