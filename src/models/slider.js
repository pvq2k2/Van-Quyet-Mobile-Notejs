import mongoose, { ObjectId } from 'mongoose';

const sliderSchema = mongoose.Schema({
    img: {
        type: String,

    },
}, { timestamps: true })

export default mongoose.model('Slider', sliderSchema);