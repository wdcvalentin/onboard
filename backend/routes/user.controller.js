const router = require("express").Router();
const verify = require("./auth/verifyToken");
const User = require("../model/user");

// get all users
router.get("/" , async (req, res) => {
    try {
        const users = await User.find({});
        res.send(users)
    } catch (error) {
        res.status(404).send(error)
    }
})

module.exports = router