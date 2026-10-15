import mongoose from 'mongoose'

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  client_name: String,
  category: { type: String, required: true },
  image_url: String,
  live_url: String,
  technologies: [String],
  featured: { type: Boolean, default: false },
  display_order: { type: Number, default: 0 }
}, { timestamps: true })

export const Project = mongoose.model('Project', projectSchema)