const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  exercise: {type: String, enum: ['Bicep', 'Legs', 'Tricep', 'Back', 'Chest'], require},
  weight: {type: Number, require},
  reps: {type: Number, default: 10, require}
},{
  timestamp: true
})

module.exports = mongoose.model('Exercise', workoutSchema)