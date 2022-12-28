const mongoose = require('mongoose')

const blogSchema = mongoose.Schema({
    title : {
        type : "String",
    },
    content : {
        type : "String"
    }, 
    comments : {
        type : "Array"
    }
})

const Blog = mongoose.model('Blog',blogSchema)

module.exports = Blog
