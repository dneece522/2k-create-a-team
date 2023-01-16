import { Player } from '../models/player.js'

function index(req, res) {
  Player.find({})
  .then(players => {
    res.render('players/index', {
      title: 'Add Player',
      players
    })
  })
  .catch(err => {
    console.error(err)
    res.redirect('/players')
  })
}

function create(req, res) {
  req.body.owner = req.user.profile._id
  Player.create(req.body)
  .then(player => {
    res.redirect('/players')
  })
  .catch(err => {
    console.error(err)
    res.redirect('/players')
  })
}

export {
  index,
  create
}