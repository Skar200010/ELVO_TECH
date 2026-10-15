import { NewsletterSubscriber } from '../models/NewsletterSubscriber.js'

export const newsletterController = {
  async subscribe(req, res) {
    try {
      const { email } = req.body

      if (!email) {
        return res.status(400).json({ error: 'Email is required' })
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(email)) {
        return res.status(400).json({ error: 'Invalid email address' })
      }

      const existing = await NewsletterSubscriber.findOne({ email })
      if (existing) {
        return res.status(400).json({ error: 'Email already subscribed' })
      }

      const subscriber = await NewsletterSubscriber.create({ email })
      res.status(201).json({ message: 'Subscribed successfully', data: subscriber })
    } catch (error) {
      console.error('Newsletter subscribe error:', error)
      res.status(500).json({ error: 'Failed to subscribe' })
    }
  },

  async getAll(req, res) {
    try {
      const subscribers = await NewsletterSubscriber.find().sort({ subscribed_at: -1 })
      res.json(subscribers)
    } catch (error) {
      console.error('Newsletter getAll error:', error)
      res.status(500).json({ error: 'Failed to fetch subscribers' })
    }
  },

  async unsubscribe(req, res) {
    try {
      const { email } = req.body
      const subscriber = await NewsletterSubscriber.findOneAndDelete({ email })
      if (!subscriber) {
        return res.status(404).json({ error: 'Subscriber not found' })
      }
      res.json({ message: 'Unsubscribed successfully' })
    } catch (error) {
      console.error('Newsletter unsubscribe error:', error)
      res.status(500).json({ error: 'Failed to unsubscribe' })
    }
  }
}