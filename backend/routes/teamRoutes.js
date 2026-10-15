import express from 'express'
import {
  getAll,
  create,
  getById,
  update,
  deleteById
} from '../controllers/teamController.js'

const router = express.Router()

router.post('/', create)
router.get('/', getAll)
router.get('/:id', getById)
router.put('/:id', update)
router.delete('/:id', deleteById)

export default router
