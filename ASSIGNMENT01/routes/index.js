var express = require("express");
var router = express.Router();

//GET THE ROUTES FOR ALL THE PAGESS
router.get("/", function (req, res, next) {
    res.render("index", { title: "Express" });
});

router.get("/about", function (req, res, next) {
    res.render("about", { title: "About" });
});

router.get('/portfolio', function(req, res, next) {
  res.render('portfolio', { title: 'Portfolio' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

module.exports = router;
