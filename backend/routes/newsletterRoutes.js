import express from 'express'
import { newsletterController } from '../controllers/newsletterController.js'

const router = express.Router()

router.post('/subscribe', newsletterController.subscribe)
router.get('/', newsletterController.getAll)
router.delete('/unsubscribe', newsletterController.unsubscribe)

export default router