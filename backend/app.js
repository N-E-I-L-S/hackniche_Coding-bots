const connectToMongo = require('./db.js')
connectToMongo();

const express = require('express');
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

const port = 3005

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/api/user', require("./routes/user"))
app.use('/api/jobs', require("./routes/jobs"))

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})