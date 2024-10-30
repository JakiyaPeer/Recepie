
import { mongoose } from 'mongoose';

const recepieSchema =  mongoose.Schema({
    title: { type: String, required: true },
    ingredients: { type: [String], required: true },
    instructions: { type: String, required: true },
});
const recepie=mongoose.model("recepie",recepieSchema)
export default recepie;