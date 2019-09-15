import mongoose from "mongoose"
const Schema = mongoose.Schema

const _model = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    coverImg: { type: String, default: 'https://image.flaticon.com/icons/png/512/176/176315.png' },
    rating: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true }
}, { timestamps: true })

export default class GamesService {
    get repository() {
        return mongoose.model('games', _model)
    }
}