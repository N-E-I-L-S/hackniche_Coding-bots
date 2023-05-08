const express = require("express")
const router = express.Router()
const Blogs = require("../models/Blog")


router.get('/allblogs', function (req, res, next) {
    Blogs.find({}).then(function (blog) {
        res.send(blog);
        console.log(blog)
    }).catch(next);
});

module.exports = router;

