import { Project } from '../models/Project.js'

export const projectController = {
  async create(req, res) {
    try {
      const project = await Project.create(req.body)
      res.status(201).json(project)
    } catch (error) {
      console.error('Project create error:', error)
      res.status(500).json({ error: 'Failed to create project' })
    }
  },

  async getAll(req, res) {
    try {
      const { featured, category } = req.query
      const filter = {}
      if (featured === 'true') filter.featured = true
      if (category) filter.category = category

      const projects = await Project.find(filter).sort({ display_order: 1 })
      res.json(projects)
    } catch (error) {
      console.error('Project getAll error:', error)
      res.status(500).json({ error: 'Failed to fetch projects' })
    }
  },

  async getById(req, res) {
    try {
      const project = await Project.findById(req.params.id)
      if (!project) {
        return res.status(404).json({ error: 'Project not found' })
      }
      res.json(project)
    } catch (error) {
      console.error('Project getById error:', error)
      res.status(500).json({ error: 'Failed to fetch project' })
    }
  },

  async update(req, res) {
    try {
      const project = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true })
      if (!project) {
        return res.status(404).json({ error: 'Project not found' })
      }
      res.json(project)
    } catch (error) {
      console.error('Project update error:', error)
      res.status(500).json({ error: 'Failed to update project' })
    }
  },

  async delete(req, res) {
    try {
      const project = await Project.findByIdAndDelete(req.params.id)
      if (!project) {
        return res.status(404).json({ error: 'Project not found' })
      }
      res.json({ message: 'Project deleted' })
    } catch (error) {
      console.error('Project delete error:', error)
      res.status(500).json({ error: 'Failed to delete project' })
    }
  }
}