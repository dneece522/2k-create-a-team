import { Router } from 'express'
import * as playersCtrl from '../controllers/players.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

// GET localhost:3000/players
router.get('/', playersCtrl.index)

// POST localhost:3000/players
router.post('/', isLoggedIn, playersCtrl.create)

export {
  router
}