import { Team } from '../models/team.js'

function newTeam(req, res) {
  res.render('teams/new', {
    title: 'Add Team'
  })
}

function create(req, res) {
  Team.create(req.body)
  .then(team => {
    res.redirect('/teams/new')
  })
  .catch(err => {
    console.error(err)
    res.redirect('/teams/new')
  })
}

export {
  newTeam as new,
  create,
}