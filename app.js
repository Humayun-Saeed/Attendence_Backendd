var express = require('express')
var mongoose = require('mongoose')
var User = require('./Routes/User_Route')
var app=express()
app.use(express.json())
const mongo=mongoose.connect('mongodb+srv://Humayun-Saeed:s12345678@cluster0.p48xj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
.then(()=>{
    console.log("connected to the database successfully: ");
})
.catch((err)=>{
    console.log(err);
})

app.use('/User',User)

app.listen(8000,()=>{
    console.log("connected to the server: ");
})



