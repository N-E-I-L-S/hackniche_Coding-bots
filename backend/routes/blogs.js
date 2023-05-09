const express = require("express")
const router = express.Router()
const Blog = require("../models/Blog")
const app = express();

app.post('/insertblog',function(req,res){
        console.log("🚀 ~ file: blogs.js:7 ~ app.post ~ req:", req.body)
        
    const blog = new Blog({
        title: req.body.title,
        
        content: req.body.content,
        
    })
    blog.save();
    res.send("inserted data");
    
    
});


module.exports = router;