import mongoose from 'mongoose';
const SCHEMA = mongoose.Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    category: {
        type: String
    },
    price: {
        type: Number
    },
    created_date:  {
        type: Date,
        default: Date.now()
    }
})
