const router = require("express").Router()
const User = require("../model/user")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const { registerValidation, loginValidation } = require("../validation")

router.post("/register", async (req, res) => {
    try {
        // lets validate the data before we create user
        const { error } = registerValidation(req.body)
        if (error) return res.status(400).send(error.details[0].message)

        //check if the user already in our database
        const emailExist = await User.findOne({ email: req.body.email })
        if (emailExist) return res.status(400).send("email already exist")

        //hash passwords
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(req.body.password, salt)

        //create a new user
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword

        })
        console.log('user', user);

        const savedUser = await user.save()
        res.send({ user: savedUser })
    } catch (error) {
        res.status(400).send(error)
    }
})


//login
router.post("/login", async (req, res) => {
    try {
        const { error } = loginValidation(req.body)
        if (error) return res.status(400).send(error.details[0].message)

        const user = await User.findOne({ email: req.body.email })
        if (!user) return res.status(400).send("email or password is wrong")

        const validPass = await bcrypt.compare(req.body.password, user.password)
        if (!validPass) return res.status(400).send("invalid password")

        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET)
        res.header("auth-token", token).send(token)
    } catch (error) {
        res.status(400).send(error)
    }
})

module.exports = router