import mongoose from 'mongoose'

const Schema = mongoose.Schema

const teamSchema = new Schema({
  city: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  conference: {
    type: String,
    enum: ['West', 'East']
  },
  priColor: {
    type: String,
    required: true
  },
  secColor: {
    type: String,
    required: true
  },
  roster: [{type: Schema.Types.ObjectId, ref: 'Player'}],
  owner: {type: Schema.Types.ObjectId, ref: "Profile"}
}, {
  timestamps: true
})

const Team = mongoose.model('Team', teamSchema)

export {
  Team
}