import mongoose from 'mongoose'

const Schema = mongoose.Schema

const playerSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  position: {
    type: String,
    enum: ['Point Guard', 'Shooting Guard', 'Small Forward', 'Power Forward', 'Center']
  },
  college: {
    type: String,
    required: true
  },
  offRating: {
    type: String,
    min: 0,
    max: 99
  },
  defRating: {
    type: String,
    min: 0,
    max: 99
  }
}, {
  timestamps: true
})

const Player = mongoose.model('Player', playerSchema)

export {
  Player
}