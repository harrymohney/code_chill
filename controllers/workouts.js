module.exports = {
    new: newWorkout,
    create
}

const Exercise = require('../models/workout')



function newWorkout(req, res) {
    res.render('workouts/new', { title: 'Add A Workout' })
}

async function create(req, res) {
    try {
        await Exercise.create(req.body)
        res.redirect('/')
    } catch (err) {
        console.log(err)
    }
}





// function newWorkout(req, res) {
//     res.render('workouts/new', {title: 'Add A Workout'})
// }

// async function create(req, res) {
//     // res.render('workouts/new', {title: 'Workout Tracker'})
//     // 
//     try {
//       await Exercise.create(req.body)
//       // res.redirect('/workouts/new')
//     } catch(err){console.log(err)}
// }