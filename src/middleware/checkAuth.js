import expressJWT from "express-jwt";

export const requireSignin = expressJWT({
    secret: "12345",
    algorithms: ["HS256"],
    requestProperty: "auth"
});

export const isAuth = (req, res, next) => {
    console.log(req.auth)
    console.log(req.profile)
    const user = req.profile._id == req.auth._id;
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