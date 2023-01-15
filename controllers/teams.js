import { Team } from '../models/team.js'

function newTeam(req, res) {
  res.render('teams/new', {
    title: 'Add Team'
  })
}

function create(req, res) {
  req.body.owner = req.user.profile._id
  Team.create(req.body)
  .then(team => {
    res.redirect('/teams')
  })
  .catch(err => {
    console.error(err)
    res.redirect('/teams')
  })
}

export {
  newTeam as new,
  create,
}