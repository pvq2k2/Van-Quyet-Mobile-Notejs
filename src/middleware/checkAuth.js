import expressJWT from "express-jwt";

export const requireSignin = expressJWT({
    secret: "123456",
    algorithms: ["HS256"],
    requestProperty: "auth"
});

export const isAuth = (req, res, next) => {
    const user = req.profile._id == req.auth.id;
    if (!user) {
        return res.status(402).json({
            message: "Bạn không được phép truy cập"
        })
    }
    next();
}
export const isAdmin = (req, res, next) => {
    if (req.profile.role == 0) {
        return res.status(401).json({
            message: 'Bạn không phải là admin'
        })
    }
    next();
}
export const checkAuth = (req, res, next) => {
    const isAdmin = true;
    if (isAdmin) {
        next();
    } else {
        res.redirect('/');
    }
}