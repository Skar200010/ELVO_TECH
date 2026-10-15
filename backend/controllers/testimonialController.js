import { Testimonial } from '../models/Testimonial.js'

export const testimonialController = {
  async create(req, res) {
    try {
      const testimonial = await Testimonial.create(req.body)
      res.status(201).json(testimonial)
    } catch (error) {
      console.error('Testimonial create error:', error)
      res.status(500).json({ error: 'Failed to create testimonial' })
    }
  },

  async getAll(req, res) {
    try {
      const { featured } = req.query
      const filter = featured === 'true' ? { is_featured: true } : {}

      const testimonials = await Testimonial.find(filter).sort({ createdAt: -1 })
      res.json(testimonials)
    } catch (error) {
      console.error('Testimonial getAll error:', error)
      res.status(500).json({ error: 'Failed to fetch testimonials' })
    }
  },

  async getById(req, res) {
    try {
      const testimonial = await Testimonial.findById(req.params.id)
      if (!testimonial) {
        return res.status(404).json({ error: 'Testimonial not found' })
      }
      res.json(testimonial)
    } catch (error) {
      console.error('Testimonial getById error:', error)
      res.status(500).json({ error: 'Failed to fetch testimonial' })
    }
  },

  async update(req, res) {
    try {
      const testimonial = await Testimonial.findByIdAndUpdate(req.params.id, req.body, { new: true })
      if (!testimonial) {
        return res.status(404).json({ error: 'Testimonial not found' })
      }
      res.json(testimonial)
    } catch (error) {
      console.error('Testimonial update error:', error)
      res.status(500).json({ error: 'Failed to update testimonial' })
    }
  },

  async delete(req, res) {
    try {
      const testimonial = await Testimonial.findByIdAndDelete(req.params.id)
      if (!testimonial) {
        return res.status(404).json({ error: 'Testimonial not found' })
      }
      res.json({ message: 'Testimonial deleted' })
    } catch (error) {
      console.error('Testimonial delete error:', error)
      res.status(500).json({ error: 'Failed to delete testimonial' })
    }
  }
}