import mongoose from "mongoose"
const Schema = mongoose.Schema
export const GalaxySchema = new Schema({
  name: { type: String, required: true, minlength: 2, maxlength: 200 },
  system: { type: String, required: true, minlength: 2, maxlength: 200 },
  planets: { type: Number, default: 0, min: 0, max: 0, },
},
  { timestamps: true, toJSON: { virtuals: true } }
)



