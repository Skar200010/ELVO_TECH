import express from 'express'
import { contactController } from '../controllers/contactController.js'

const router = express.Router()

router.post('/', contactController.create)
router.get('/', contactController.getAll)
router.patch('/:id/status', contactController.updateStatus)
router.delete('/:id', contactController.delete)

export default router