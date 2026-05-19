import mongoose from "mongoose";

const turfSchema = new mongoose.Schema({
    name: {type: String , required: true},
    location: {type: String , required: true},
    price: {type: Number , required: true},
    image: {type: String},
    description: {type: String}
})

export default mongoose.model('Turf', turfSchema)