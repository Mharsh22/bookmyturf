import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import turfRoutes from './routes/turfs.js'
import bookingRoutes from './routes/bookings.js'

dotenv.config()

const app = express()

// Middlewares - these run on every request
app.use(cors())           // allows React (port 5173) to talk to backend (port 5000)
app.use(express.json())   // allows backend to read JSON data sent from React

// Test route - just to verify server works
app.get('/', (req, res) => {
  res.json({ message: 'BookMyTurf backend is running!' })
})

app.use('/api/turfs', turfRoutes)

app.use('/api/bookings', bookingRoutes)


// Connect to MongoDB then start server
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB connected')
    app.listen(process.env.PORT, () => {
      console.log(`🚀 Server running on port ${process.env.PORT}`)
    })
  })
  .catch((err) => {
    console.log('❌ MongoDB connection failed:', err)
  })