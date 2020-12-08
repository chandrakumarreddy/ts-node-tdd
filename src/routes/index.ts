import { Router } from 'express'
import authRouter from './auth'
import dashboard from './dashboard'

const router = Router()
router.use('/auth', authRouter)
router.use('/dashboard', dashboard)

export default router