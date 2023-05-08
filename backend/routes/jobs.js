const express = require("express")
const router = express.Router()
const Jobs = require("../models/Jobs")


router.get('/alljobs', function (req, res, next) {
    Jobs.find({}).then(function (job) {
        res.send(job);
        // console.log(job)
    }).catch(next);
});

module.exports = router;

