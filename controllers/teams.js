import { Player } from '../models/player.js'
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
    res.redirect(`/teams/${team._id}`)
  })
  .catch(err => {
    console.error(err)
    res.redirect('/teams/new')
  })
}

function index(req, res) {
  Team.find({})
  .populate('owner')
  .then(teams => {
    res.render('teams/index', {
      title: 'All Teams',
      teams,
      user: req.user ? req.user : null
    })
  })
  .catch(err => {
    console.error(err)
    res.redirect('/')
  })
}

function deleteTeam(req, res) {
  Team.findById(req.params.id)
  .then(team => {
    if (team.owner.equals(req.user.profile._id)) {
      team.delete()
      .then(() => {
        res.redirect('/teams')
      })
    } else {
      throw new Error ('🚫 Not Authorized 🚫')
    }
  })
  .catch(err => {
    console.error(err)
    res.redirect('/teams')
  })
}

function show(req, res) {
  Team.findById(req.params.id)
  .populate('owner roster')
  .then(team => {
    Player.find({_id: {$nin: team.roster}})
    .then(players => {
      console.log('ROSTER:', team.roster)
      res.render('teams/show', {
        title: 'Team Details',
        team,
        players
      })
    })
    .catch(err => {
      console.error(err)
      res.redirect('/teams')
    })

  })
  .catch(err => {
    console.error(err)
    res.redirect('/teams')
  })
}

function addToRoster(req, res) {
  Team.findById(req.params.id)
  .then(team => {
    team.roster.push(req.body.pgId) //point guard
    team.roster.push(req.body.sgId) //shooting guard
    team.roster.push(req.body.sfId) //small forward
    team.roster.push(req.body.pfId) //power forward
    team.roster.push(req.body.cId)  //center
    team.save()
    .then(() => {
      res.redirect(`/teams/${team._id}`)
    })
    .catch(err => {
      console.error(err)
      res.redirect('/teams')
    })
  })
  .catch(err => {
    console.error(err)
    res.redirect('/teams')
  })
}

export {
  newTeam as new,
  create,
  index,
  deleteTeam as delete,
  show,
  addToRoster,
}