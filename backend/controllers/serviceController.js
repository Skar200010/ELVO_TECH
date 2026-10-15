import { Service } from '../models/Service.js'

export const serviceController = {
  async create(req, res) {
    try {
      const service = await Service.create(req.body)
      res.status(201).json(service)
    } catch (error) {
      console.error('Service create error:', error)
      res.status(500).json({ error: 'Failed to create service' })
    }
  },

  async getAll(req, res) {
    try {
      const { active } = req.query
      const filter = active === 'true' ? { is_active: true } : {}
      const services = await Service.find(filter).sort({ display_order: 1 })
      res.json(services)
    } catch (error) {
      console.error('Service getAll error:', error)
      res.status(500).json({ error: 'Failed to fetch services' })
    }
  },

  async getById(req, res) {
    try {
      const service = await Service.findById(req.params.id)
      if (!service) {
        return res.status(404).json({ error: 'Service not found' })
      }
      res.json(service)
    } catch (error) {
      console.error('Service getById error:', error)
      res.status(500).json({ error: 'Failed to fetch service' })
    }
  },

  async update(req, res) {
    try {
      const service = await Service.findByIdAndUpdate(req.params.id, req.body, { new: true })
      if (!service) {
        return res.status(404).json({ error: 'Service not found' })
      }
      res.json(service)
    } catch (error) {
      console.error('Service update error:', error)
      res.status(500).json({ error: 'Failed to update service' })
    }
  },

  async delete(req, res) {
    try {
      const service = await Service.findByIdAndDelete(req.params.id)
      if (!service) {
        return res.status(404).json({ error: 'Service not found' })
      }
      res.json({ message: 'Service deleted' })
    } catch (error) {
      console.error('Service delete error:', error)
      res.status(500).json({ error: 'Failed to delete service' })
    }
  }
}