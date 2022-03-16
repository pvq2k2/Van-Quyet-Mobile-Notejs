import mongoose, { ObjectId } from 'mongoose';

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 5
    },
    slug: {
        type: String,
        lowercase: true,
        unique: true,
        index: true
    },
    desc: {
        type: String,
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: ObjectId,
        ref: 'Category',
    },
}, { timestamps: true })

export default mongoose.model('Product', productSchema);