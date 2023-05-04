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

app.use('/api/blog', require("./routes/blog"))
app.use('/api/jobs', require("./routes/jobs"))
// To connect with your mongoDB database
mongoose.connect('mongodb://localhost:27017/', {
	dbName: 'yourDB-name',
	useNewUrlParser: true,
	useUnifiedTopology: true
}, err => err ? console.log(err) :
	console.log('Connected to yourDB-name database'));

// Schema for users of app
const BlogSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	body: {
		type: String,
		required: true,
		unique: true,
	},
	date: {
		type: String,
		default: Date.now,
	},
});
const Blog = mongoose.model('users', BlogSchema);
Blog.createIndexes();

app.post("/getBlogs", async (req, resp) => {
	try {
		const blog = new Blog(req.body);
		let result = await blog.save();
		result = result.toObject();
		if (result) {
			delete result.password;
			resp.send(req.body);
			console.log(result);
		} else {
			console.log("Blog already register");
		}

	} catch (e) {
		resp.send("Something Went Wrong");
	}
});
app.listen(5000);


app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})