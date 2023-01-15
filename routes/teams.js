import { Router } from 'express'
import * as teamsCtrl from '../controllers/teams.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

// GET localhost:3000/teams/new
router.get('/new', teamsCtrl.new)

// GET localhost:3000/teams
router.get('/', teamsCtrl.index)

// POST localhost:3000/teams
router.post('/', isLoggedIn, teamsCtrl.create)

export {
  router
}