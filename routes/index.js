const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
  console.log('Index');

  return res.render('index');
});

module.exports = router;
