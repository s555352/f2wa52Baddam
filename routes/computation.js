var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var x = Math.floor(Math.random()*10);
    var y = Math.floor(Math.random()*10);
    var a = Math.pow(x,y);
    var b = Math.sign(x);
    var c = Math.tanh(x);
    var d = Math.trunc(x);
  res.render('computation', { title: 'My Bonus computation', x:x,y:y, a:a, b:b, c:c, d:d});
});

module.exports = router;
