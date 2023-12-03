// routes/index.js
const express = require('express');
const router = express.Router();

// Define your home page route or any other common routes
router.get('/', (req, res) => {
  res.render('index');
});

module.exports = router;
