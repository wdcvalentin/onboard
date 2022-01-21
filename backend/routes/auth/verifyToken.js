const jwt = require("jsonwebtoken")

module.exports = function  (req,res,next) {
    console.log('[verifyToken]: Checking the token')
    const token = req.header("auth-token")
    console.log('token', token)
    if(!token) return res.status(401).send("acces denied")

    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET)
        req.user = verified
        next()
    } catch (error) {
        res.status(400).send("invalid token")
    }
}

