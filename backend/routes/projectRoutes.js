import express from 'express'
import { projectController } from '../controllers/projectController.js'

const router = express.Router()

router.post('/', projectController.create)
router.get('/', projectController.getAll)
router.get('/:id', projectController.getById)
router.put('/:id', projectController.update)
router.delete('/:id', projectController.delete)

export default router