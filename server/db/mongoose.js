const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://harsha-admin:mkbhd9999@personalbudget.492wy.mongodb.net/budgetdata?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useCreateIndex : true
});