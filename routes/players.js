import { Router } from 'express'
import * as playersCtrl from '../controllers/players.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

// GET localhost:3000/players/new
router.get('/new', isLoggedIn, playersCtrl.new)

export {
  router
}