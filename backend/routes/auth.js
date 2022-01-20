const router = require("express").Router()
const User = require("../model/user")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const { registerValidation, loginValidation } = require("../validation")

router.post("/signup", async (req, res) => {
    try {
        const { error } = registerValidation(req.body)
        if (error) return res.send({
            message: "Wrong data",
            response: false
        })

        const emailExist = await User.findOne({ email: req.body.email })
        if (emailExist) return res.send({
            message: "email already exist",
            response: false
        })

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(req.body.password, salt)
        const user = new User({
            // name: req.body.name,
            email: req.body.email,
            password: hashedPassword

        })
        const savedUser = await user.save()
        res.send({ user: savedUser })

    } catch (error) {
        res.status(400).send(error)
    }
})

router.post("/login", async (req, res) => {
    const { error } = loginValidation(req.body)
    if (error) res.send({
        message: "Type validation is incorrect",
        response: false
    })

    const user = await User.findOne({ email: req.body.email })
    if (!user) res.send({
        message: "Invalid email or password",
        response: false
    })

    const validPass = await bcrypt.compare(req.body.password, user.password)
    if (!validPass) res.send({
        message: "password is incorrect",
        response: false
    })

    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET)
    res.send({
        message: 'OK',
        response: token
    })
})

module.exports = router