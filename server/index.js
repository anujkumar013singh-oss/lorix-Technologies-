import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import Contact from './models/Contact.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err))

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, projectType, message } = req.body

    if (!name || !email || !projectType || !message) {
      return res.status(400).json({ error: 'All fields are required' })
    }

    const contact = await Contact.create({ name, email, projectType, message })

    res.status(201).json({
      success: true,
      message: 'Your message has been received. We will get back to you shortly.',
      data: { id: contact._id },
    })
  } catch (err) {
    console.error('Contact save error:', err)
    res.status(500).json({ error: 'Something went wrong. Please try again later.' })
  }
})

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok' })
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
