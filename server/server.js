const express = require('express');
const app = express();
const cors = require('cors');
const mongoose  = require('mongoose');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const budgetModel = require('./models/budgetModel');


const userModel = require('./models/userModel');
const users = require('./routes/users');
const auth = require('./routes/auth');

const feedbackModel = require('./models/feedbackModel');
const port = 3000;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



var url = 'mongodb+srv://harsha-admin:mkbhd9999@personalbudget.492wy.mongodb.net/budgetdata?retryWrites=true&w=majority';

mongoose.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex: true })
    .then(() => console.log('Now connected to MongoDB!'))
    .catch(err => console.error('Something went wrong', err));



app.use(express.json());
app.use('/users', users);    
app.use('/auth', auth);    
app.use('/budget', auth);
app.use('',express.static('public'));
app.use(cors());



app.get('/hello',(req,res)=>{
    res.send("sample text");    
});

app.get('/budget',(req,res)=>{     
    mongoose.connect(url,{useNewUrlParser: true, useUnifiedTopology: true})
            .then(()=>{
                console.log("Connection to the database is established");
                budgetModel.find({})
                           .then((data)=>{
                               console.log(data);
                               res.status(200).send(data);
                               mongoose.connection.close();
                           })
                           .catch((err)=>{
                               console.log(err);
                               res.status(500).send();
                           })
            })   
})

app.post('/budget',(req,res)=>{
    console.log("inside post");
    console.log(req.body);
    let data = {id: req.body._id, title: req.body.title, budget: req.body.budget, color: req.body.color,maxbudget: req.body.maxbudget}
    mongoose.connect(url,{useNewUrlParser: true, useUnifiedTopology: true})
            .then(()=>{
                console.log("Connection to the database is established");
                budgetModel.insertMany(data,(err,data)=>{
                    if(err){
                        console.log(err);      
                        res.send(err);
                        mongoose.connection.close();
                    }else{
                        console.log("insert successful"); 
                        res.send(data);    
                        mongoose.disconnect();
                    }                    
                })                              
})
});

app.get('/users',(req,res)=>{
    mongoose.connect(url,{useNewUrlParser: true, useUnifiedTopology: true})
            .then(()=>{
                console.log("Connection to the database is established");
                userModel.find({})
                           .then((data)=>{
                               console.log(data);
                               res.status(200).send(data);
                               mongoose.connection.close();
                           })
                           .catch((err)=>{
                               console.log(err);
                               res.status(500).send();
                           })
            })
})

// Routes for feedback model
app.get('/feedback',(req,res)=>{
    mongoose.connect(url,{useNewUrlParser: true, useUnifiedTopology: true})
            .then(()=>{
                console.log("Connection to the database is established");
                feedbackModel.find({})
                           .then((data)=>{
                               console.log(data);
                               res.status(200).send(data);
                               mongoose.connection.close();
                           })
                           .catch((err)=>{
                               console.log(err);
                               res.status(500).send();
                           })
            }) 
})

app.post('/feedback',(req,res)=>{
    console.log("inside post");
    console.log(req.body);
    let data = {id: req.body._id, username: req.body.username, email: req.body.email, description: req.body.description}
    mongoose.connect(url,{useNewUrlParser: true, useUnifiedTopology: true})
            .then(()=>{
                console.log("Connection to the database is established");
                feedbackModel.insertMany(data,(err,data)=>{
                    if(err){
                        console.log(err);      
                        res.send(err);
                        mongoose.connection.close();
                    }else{
                        console.log("insert successful"); 
                        res.send(data);    
                        mongoose.disconnect();
                    }                    
                })                              
})
})



app.listen(port,()=>{
    console.log("App is running on port "+port);
});