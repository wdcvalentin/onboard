const router = require("express").Router()
const User = require("../../model/user")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const { registerValidation, loginValidation } = require("../../validation")

router.post("/signup", async (req, res) => {
    try {
        const { error } = registerValidation(req.body)
        if (error) return res.status(401).send({
            message: "Wrong data",
            response: false
        })

        const emailExist = await User.findOne({ email: req.body.email })
        if (emailExist) return res.status(401).send({
            message: "email already exist",
            response: false
        })

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(req.body.password, salt)
        const user = new User({
            email: req.body.email,
            password: hashedPassword,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
        })
        await user.save()
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET)

        return res.send({
            message: 'OK',
            response: token
        })
    } catch (error) {
        res.status(400).send(error)
    }
})

router.post("/login", async (req, res) => {
    const { error } = loginValidation(req.body)
    if (error) return res.status(401).send({
        message: "Type validation is incorrect",
        response: false
    })

    const user = await User.findOne({ email: req.body.email })
    if (!user) return res.status(401).send({
        message: "Invalid email or password",
        response: false
    })

    const validPass = await bcrypt.compare(req.body.password, user.password)
    if (!validPass) return res.status(401).send({
        message: "password is incorrect",
        response: false
    })

    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET)

    return res.send({
        message: 'OK',
        response: {
            user,
            token
        } 
    })
})

module.exports = router