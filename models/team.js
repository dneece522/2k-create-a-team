import mongoose from 'mongoose'

const Schema = mongoose.Schema

const teamSchema = new Schema({
  city: String,
  name: String,
  conference: {
    type: String,
    enum: ['West', 'East']
  },
  priColor: String,
  secColor: String,
  owner: {type: Schema.Types.ObjectId, ref: "Profile"}
}, {
  timestamps: true
})

const Team = mongoose.model('Team', teamSchema)

export {
  Team
}