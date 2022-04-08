import Slider from '../models/slider';

export const list = async (req, res) => {
    try {
        const sliders = await Slider.find().exec();
        res.json(sliders);
    }
    catch (error) {
        res.status(404).json({
            message: "Image not found",
        })
    }
  }
export const get = async (req, res) => {
    try {
        const sliders = await Slider.findOne({_id: req.params.id }).exec();
        res.json(sliders);    
    } catch (error) {
        res.status(400).json({
            message: "Thêm ảnh không thành công"
        })
    }
}
export const create = async (req, res) => {
    try {
        const sliders = await new Slider(req.body).save();
        res.json(sliders);    
    } catch (error) {
        res.status(400).json({
            message: "Add image failed"
        })
    }
}
export const remove = async (req, res) => {
    try {
        const sliders = await Slider.findByIdAndDelete({_id: req.params.id}).exec();
        res.json(sliders);
    } catch (error) {
        res.status(400).json({
            message: 'Remove image failed',
        });
    }
}
export const update = async (req, res) => {
    const conditions = {_id: req.params.id};
    const update = req.body;
    const optional = { new: true };
    try {
        const sliders = await Slider.findByIdAndUpdate(conditions, update, optional).exec();
        res.json(sliders);
    } catch (error) {
        res.status(400).json({
            message: "Update image failed",
        })
    }
}