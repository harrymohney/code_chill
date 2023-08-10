module.exports = {
    create
}

const Exercise = require('../models/workout')

async function create (req, res) {
    // res.render('workouts/new', {title: 'Workout Tracker'})
    
    // 
    try {
      await Exercise.create(req.body)
      // res.redirect('/workouts/new')
    } catch(err){console.log(err)}
}