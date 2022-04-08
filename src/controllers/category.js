import Category from '../models/category'
import slugify from 'slugify';
import Product from '../models/product';


export const create = async (req, res) => { // create product
    req.body.slug = slugify(req.body.name);
    try {
        const category = await new Category(req.body).save()
        res.json(category);    
    } catch (error) {
        res.status(400).json({
            message: "Thêm danh mục không thành công"
        })
    }
}

export const list = async (req, res) => { // get all
    try {
        const categories = await Category.find().exec();
        res.json(categories);    
    } catch (error) {
        res.status(400).json({
            message: "Lỗi"
        })
    }
}
// export const listAll = async (req, res) => { // get all
//     try {
//         const categories = await Category.find().exec();
//         const products = await Product.find({_id: categories}).populate('category').select('-category').exec()
//         console.log(categories);
//         console.log(products);
//         res.json(categories);   
//     } catch (error) {
//         res.status(400).json({
//             message: "Lỗi"
//         })
//     }
// }
export const read = async (req, res) => { // get all
    try {
        const category = await Category.findOne({slug: req.params.slug}).exec();
        const products = await Product.find({category: category}).populate('category').select('-category').exec()
        console.log('products', products);
        res.json({
            category, products
        });    
    } catch (error) {
        res.status(400).json({
            message: "Lỗi"
        })
    }
  }
  export const remove = async (req, res) => { 
    try {
        const category = await Category.findOneAndDelete({slug: req.params.slug}).exec();
        res.json(category);
    } catch (error) {
        res.status(400).json({
            message: 'Remove category failed',
        });
    }
}
export const update = async (req, res) => { 
    const conditions = {slug: req.params.slug};
    const update = req.body;
    const optional = { new: true };
    try {
        const category = await Category.findOneAndUpdate(conditions, update, optional).exec();
        res.json(category);
    } catch (error) {
        res.status(400).json({
            message: "Update category failed",
        })
    }
}