import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
    turfId: {type: mongoose.Schema.Types.ObjectId, ref: 'Turf' , required: true},
    turfName: {type: String , required: true},
    date: {type: String , required: true},
    slot: {type: String , required: true},
    userName: {type: String , required: true},
    userPhone: {type: String , required: true},
})

export default mongoose.model('Booking', bookingSchema)