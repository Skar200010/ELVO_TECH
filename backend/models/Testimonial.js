import mongoose from 'mongoose'

const testimonialSchema = new mongoose.Schema({
  client_name: { type: String, required: true },
  client_role: String,
  company: String,
  content: { type: String, required: true },
  rating: { type: Number, default: 5, min: 1, max: 5 },
  avatar_url: String,
  project_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Project' },
  is_featured: { type: Boolean, default: false }
}, { timestamps: true })

export const Testimonial = mongoose.model('Testimonial', testimonialSchema)