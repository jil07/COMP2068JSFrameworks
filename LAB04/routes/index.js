var express = require('express');
var router = express.Router();

router.get('/ironman', function(req, res, next) {
    res.render('ironman', { title: 'Iron man' });
});

router.get('/deadpool', function(req, res, next) {
    res.render('deadpool', { title: 'deadpool' });
});

router.get('/captainAmerica', function(req, res, next) {
    res.render('captainAmerica', { title: 'captainAmerica' });
});

router.get('/badman', function(req, res, next) {
    res.render('badman', { title: 'badman' });
});

module.exports = router;
