import express from 'express'
import { testimonialController } from '../controllers/testimonialController.js'

const router = express.Router()

router.post('/', testimonialController.create)
router.get('/', testimonialController.getAll)
router.get('/:id', testimonialController.getById)
router.put('/:id', testimonialController.update)
router.delete('/:id', testimonialController.delete)

export default router