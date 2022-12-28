const express = require('express');
require('dotenv').config()
const mongoose = require('mongoose')
// require('./db/conn.js')
const app = express()
const path = require('path');
const PORT = process.env.PORT || 8000;
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname,'./client/build')))
const Blog = require('./Models/models')

const connectDB = async () => {
    try {
      const conn = await mongoose.connect(process.env.DB);
      console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
}

  //Connect to the database before listening
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("listening for requests");
    })
})



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

