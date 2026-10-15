import mongoose from 'mongoose'

const teamMemberSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
  bio: String,
  avatar_url: String,
  social_links: { type: Map, of: String, default: {} },
  display_order: { type: Number, default: 0 },
  is_active: { type: Boolean, default: true }
}, { timestamps: true })

export const TeamMember = mongoose.model('TeamMember', teamMemberSchema)