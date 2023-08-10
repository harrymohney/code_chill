var express = require('express');
var router = express.Router();

const workoutsCtrl = require('../controllers/workouts')

/* GET users listing. */
router.get('/', workoutsCtrl.index)

router.get('/new', workoutsCtrl.new)

router.post('/', workoutsCtrl.create)

module.exports = router;




