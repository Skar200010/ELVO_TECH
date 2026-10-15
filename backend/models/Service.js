import mongoose from 'mongoose'

const serviceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  icon: String,
  features: [String],
  price_starting: String,
  is_active: { type: Boolean, default: true },
  display_order: { type: Number, default: 0 }
}, { timestamps: true })

export const Service = mongoose.model('Service', serviceSchema)