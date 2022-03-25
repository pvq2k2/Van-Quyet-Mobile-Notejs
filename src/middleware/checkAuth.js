import expressJWT from "express-jwt";

export const requireSignin = expressJWT({
    secret: "123456",
    algorithms: ["HS256"],
    requestProperty: "auth"
});

export const isAuth = (req, res, next) => {
    console.log(req.auth);
}

export const checkAuth = (req, res, next) => {
    const isAdmin = true;
    if (isAdmin) {
        next();
    } else {
        res.redirect('/');
    }
}