import User from '../models/user';
import jwt from 'jsonwebtoken';
export const signup = async (req, res) => {
    try {
        const { name, email, password, avatar } = req.body; 
        const exitsUser = await User.findOne({email}).exec();
        if (exitsUser) {
            res.json({
                message: "Email đã tồn tại vui lòng đăng ký email khác"
            })
        }
        
        const user = await new User({name, email, password, avatar}).save();
        res.json({
            user: {
                _id: user._id,
                name: user.name,
                email: user.email,
                avatar: user.avatar
            }
        })
    } catch (error) {
        res.status(404).json({
            message: "Không tạo được tài khoản"
        })
    }
}
export const signin = async (req, res) => {
    const {email, password } = req.body;
    const user = await User.findOne({email}).exec();
    if (!user) {
        res.status(401).json({
            message: "User không tồn tại"
        })
    }
    if (!user.authenticate(password)) {
        res.status(401).json({
            message: "Mật khẩu không đúng"
        })
    }
    const token = jwt.sign({_id: user._id}, "12345", { expiresIn: 60 * 60});
    res.json({
        token,
        user: {
            _id: user._id,
            email: user.email,
            name: user.name,
            role: user.role,
            avatar: user.avatar
        }
    })
}