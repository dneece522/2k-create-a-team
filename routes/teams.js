import { Router } from 'express'
import * as teamsCtrl from '../controllers/teams.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

// GET localhost:3000/teams/new
router.get('/new', teamsCtrl.new)

// GET localhost:3000/teams
router.get('/', teamsCtrl.index)

// GET localhost:3000/teams/:id
router.get('/:id', teamsCtrl.show)

// POST localhost:3000/teams
router.post('/', isLoggedIn, teamsCtrl.create)

// DELETE localhost:3000/teams/:id
router.delete('/:id', isLoggedIn, teamsCtrl.delete)

export {
  router
}