const express = require('express');
require('dotenv').config()
const mongoose = require('mongoose')
// require('./db/conn.js')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded())

const Blog = require('./Models/models')

app.get('/',async(req,res) => {
    res.send("Hello World");
})

app.get('/blog/:name', async(req,res) => {
    try{
        const param = String(req.params.name)
        param.replace("%20"," ")
        const data = await Blog.findOne({title : param});
        res.json({data : data})
    }catch(error){
        res.status(500).json({data : ""})
    }
})

app.post('/comment', async(req,res) => {
    try{
        const param = req.body.title
        const data = await Blog.findOne({title : param});
        const comments = data.comments;
        comments.unshift({name : req.body.name, comment : req.body.comment})
        const response = await Blog.updateOne({title : param}, {$set : {comments : comments}})
        res.status(200).json({data : "Comment Added"})
    }catch(error){
        res.status(500).json({data : ""})
    }
})

app.listen(8000, () => {
    mongoose.connect(DB)
    .then(() => {
        console.log("Connected successfull to the database")
    })
    .catch((error) => {
        console.log("Some error occured in database connection : ",error);
    })
    console.log("Server successfully started on 8000")
})

