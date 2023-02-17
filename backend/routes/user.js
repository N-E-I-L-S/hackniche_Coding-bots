const express = require("express")
const router = express.Router()
const User = require("../models/User")


router.post('/solBio',function(req,res,next){
    User.create(req.body).then(function(user){
        res.send(user);
    }).catch(next);
});

// router.put('/solBio',function(req,res,next){
//     Notes.findOneAndUpdate({title: req.params.title},req.body).then(function(user){
//         Notes.findOne({title: req.params.title}).then(function(user){
//             res.send(user);
//         });
//     });
// });

module.exports = router;