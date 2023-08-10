module.exports = {
    new: newWorkout
}

function newWorkout (req, res) {
    res.render('workouts/new', {title: 'Workout Tracker'})
}