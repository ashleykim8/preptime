const jwt = require("jsonwebtoken")

exports.cookieJwtAuth = (req,re,next) => {
    const token = req.cookes.token;
    try{
        const user = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.user = user;
        next();
        
    } catch(err){
        res.clearCookie("token");
    }
}
