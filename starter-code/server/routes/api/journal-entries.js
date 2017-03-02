/*jshint esversion:6*/
const express       = require('express');
const router        = express.Router();

const journalRoutes = require('../../models/journal-entry');

router.get('/journal-entries', function (req, res, next) {
  journalRoutes.find({}, function (err, journal) {
    if (err) return next(err);
    res.json(journal);
});
});




module.exports = router;
