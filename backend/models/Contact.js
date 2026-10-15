import mongoose from 'mongoose'

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: String,
  company: String,
  message: { type: String, required: true },
  service_interest: String,
  budget_range: String,
  status: {
    type: String,
    enum: ['new', 'contacted', 'qualified', 'converted', 'closed'],
    default: 'new'
  }
}, { timestamps: true })

export const Contact = mongoose.model('Contact', contactSchema)