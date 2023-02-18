const express = require("express")
const router = express.Router()
const User = require("../models/User")


router.post('/solBio',function(req,res,next){
    console.log(req.body)
    User.create(req.body).then(function(user){
        res.send(user);
    }).catch(next);
});

// router.get('/read', function(req, res) {
//     User.find(function(err, data) {
//         if(err){
//             console.log(err);
//         }
//         else{
//             res.send(data);
//         }
//     });  
//  });

module.exports = router;