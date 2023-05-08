const connectToMongo = require('./db.js')
connectToMongo();

const express = require('express');
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

const port = 3005

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/api/blogs', require("./routes/blogs"))
app.use('/api/blogs', require("./routes/fetchBlogs.js"))
app.use('/api/jobs', require("./routes/jobs"))
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`app listening on port http://localhost:${port}`)
})