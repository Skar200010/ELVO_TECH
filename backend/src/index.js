import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from '../config/db.js'
import contactRoutes from '../routes/contactRoutes.js'
import serviceRoutes from '../routes/serviceRoutes.js'
import projectRoutes from '../routes/projectRoutes.js'
import testimonialRoutes from '../routes/testimonialRoutes.js'
import newsletterRoutes from '../routes/newsletterRoutes.js'
import teamRoutes from '../routes/teamRoutes.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

app.use('/api/contacts', contactRoutes)
app.use('/api/services', serviceRoutes)
app.use('/api/projects', projectRoutes)
app.use('/api/testimonials', testimonialRoutes)
app.use('/api/newsletter', newsletterRoutes)
app.use('/api/team', teamRoutes)

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({ error: 'Internal server error' })
})

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })
})