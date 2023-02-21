const express = require("express")
const router = express.Router()
const Jobs = require("../models/Jobs")


router.get('/alljobs', function (req, res, next) {
    Jobs.find({}).then(function (jobs) {
        res.send(jobs);
        // console.log(user)
    }).catch(next);
});

module.exports = router;