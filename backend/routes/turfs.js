import express from 'express'
import Turf from '../models/Turf.js'

const router = express.Router()

// GET all turfs
router.get('/', async (req, res) => {
  const turfs = await Turf.find()
  res.json(turfs)
})

// POST create a turf
router.post('/', async (req, res) => {
  const turf = new Turf(req.body)
  await turf.save()
  res.json(turf)
})

// GET single turf by ID
router.get('/:id', async (req, res) => {
  const turf = await Turf.findById(req.params.id)
  res.json(turf)
})

export default router