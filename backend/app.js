const connectToMongo = require('./db.js')
connectToMongo();

const express = require('express');
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors');
const Blog = require('./models/Blog.js');

const port = 3005

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/api/blogs', require("./routes/fetchblogs"))
app.use('/api/jobs', require("./routes/jobs"))
// app.post("/api/post/insertblog", require("./routes/blogs"))
app.post('/api/post/insertblog', (req, res) => {
    console.log("🚀 ~ file: app.js:21 ~ app.post ~ req:", req.body.blog)
    

    const blog = new Blog({
        title: req.body.blog.title,

        content: req.body.blog.content,

    })
    blog.save();
    res.redirect("/api/post/insertblog");
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`app listening on port http://localhost:${port}`)
})