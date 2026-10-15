import { TeamMember } from '../models/TeamMember.js'

export const getAll = async (req, res) => {
  try {
    const teamMembers = await TeamMember.find({ is_active: true })
      .sort({ display_order: 1 })
    res.json(teamMembers)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Internal server error' })
  }
}

export const create = async (req, res) => {
  try {
    const teamMember = new TeamMember(req.body)
    await teamMember.save()
    res.status(201).json(teamMember)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Internal server error' })
  }
}

export const getById = async (req, res) => {
  try {
    const teamMember = await TeamMember.findById(req.params.id)
    if (!teamMember) {
      return res.status(404).json({ error: 'Team member not found' })
    }
    res.json(teamMember)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Internal server error' })
  }
}

export const update = async (req, res) => {
  try {
    const teamMember = await TeamMember.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )
    if (!teamMember) {
      return res.status(404).json({ error: 'Team member not found' })
    }
    res.json(teamMember)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Internal server error' })
  }
}

export const deleteById = async (req, res) => {
  try {
    const teamMember = await TeamMember.findByIdAndDelete(req.params.id)
    if (!teamMember) {
      return res.status(404).json({ error: 'Team member not found' })
    }
    res.json({ message: 'Team member deleted' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Internal server error' })
  }
}
