import mongoose from 'mongoose'
import { connectDB } from './lib/mongodb.js'

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true, lowercase: true },
  projectType: { type: String, required: true, trim: true },
  message: { type: String, required: true, trim: true },
}, { timestamps: true })

const Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema)

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    await connectDB()

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
}
