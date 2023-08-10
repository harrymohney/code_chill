module.exports = {
    new: newWorkout,
    create,
    index,
    show
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

async function index(req, res) {
    try {
        const results = await Exercise.find({})
        res.render('workouts/index', {title: ' All Workouts', exercises: results})
    } catch (err) {
        console.log(err)
        res.redirect('/')
    }
}

async function show(req, res) {
  const exercise = await Exercise.findById(req.params.id)
  res.render('workouts/show', {title: 'Last Workout', exercise})
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