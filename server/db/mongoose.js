const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/budget-final',{
    useNewUrlParser:true,
    useCreateIndex : true
});