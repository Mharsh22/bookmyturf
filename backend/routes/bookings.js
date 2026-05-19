import express from 'express'
import Booking from '../models/Booking.js'

const router = express.Router()

// GET all bookings
router.get('/', async (req, res) => {
  const booking = await Booking.find()
  res.json(booking)
})

// GET bookings for specific turf
router.get('/:turfId', async (req, res) => {
  const booking = await Booking.find({ turfId: req.params.turfId })
  res.json(booking)
})

// POST create a booking
router.post('/', async (req, res) => {
  const booking = new Booking(req.body)
  await booking.save()
  res.json(booking)
})

export default router