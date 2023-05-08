const express = require("express")
const router = express.Router()
const User = require("./models/userSchema")


// add a new feedback 
router.post('/feedback/user',function(req,res,next){
    console.log(0);
    User.create(req.body).then(function(User){
        res.send(User);
    }).catch(next);
});
app.get('/', (req, res)=>{
    res.send('Hello');
})

module.exports = router