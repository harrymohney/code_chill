var express = require('express');
var router = express.Router();

const workoutsCtrl = require('../controllers/workouts')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/new', workoutsCtrl.new)

module.exports = router;
