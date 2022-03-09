exports.checkAuth = (req, res, next) => {
    const isAdmin = true;
    if (isAdmin) {
        console.log("Hello");
        next();
    } else {
        console.log("1");
    }
}