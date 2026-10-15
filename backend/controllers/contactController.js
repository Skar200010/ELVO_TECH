import { Contact } from '../models/Contact.js'

export const contactController = {
  async create(req, res) {
    try {
      const { name, email, phone, company, message, service_interest, budget_range } = req.body

      if (!name || !email || !message) {
        return res.status(400).json({ error: 'Name, email, and message are required' })
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(email)) {
        return res.status(400).json({ error: 'Invalid email address' })
      }

      const contact = await Contact.create({
        name,
        email,
        phone,
        company,
        message,
        service_interest,
        budget_range
      })

      res.status(201).json({ message: 'Contact form submitted successfully', data: contact })
    } catch (error) {
      console.error('Contact create error:', error)
      res.status(500).json({ error: 'Failed to submit contact form' })
    }
  },

  async getAll(req, res) {
    try {
      const contacts = await Contact.find().sort({ createdAt: -1 })
      res.json(contacts)
    } catch (error) {
      console.error('Contact getAll error:', error)
      res.status(500).json({ error: 'Failed to fetch contacts' })
    }
  },

  async updateStatus(req, res) {
    try {
      const { id } = req.params
      const { status } = req.body

      const validStatuses = ['new', 'contacted', 'qualified', 'converted', 'closed']
      if (!validStatuses.includes(status)) {
        return res.status(400).json({ error: 'Invalid status' })
      }

      const contact = await Contact.findByIdAndUpdate(id, { status }, { new: true })
      if (!contact) {
        return res.status(404).json({ error: 'Contact not found' })
      }

      res.json(contact)
    } catch (error) {
      console.error('Contact updateStatus error:', error)
      res.status(500).json({ error: 'Failed to update contact status' })
    }
  },

  async delete(req, res) {
    try {
      const { id } = req.params
      const contact = await Contact.findByIdAndDelete(id)
      if (!contact) {
        return res.status(404).json({ error: 'Contact not found' })
      }
      res.json({ message: 'Contact deleted' })
    } catch (error) {
      console.error('Contact delete error:', error)
      res.status(500).json({ error: 'Failed to delete contact' })
    }
  }
}