import { connectMongo } from "../../utils/connectMongo";
import { registerValidation } from "../../utils/validation";
import User from "../../models/user";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'

export default async function handler(req, res) {
    const { error } = registerValidation(req.body)

    if (error) return res.status(401).send({
        message: "Type validation is incorrect",
        response: false
    })

    try {
        await connectMongo();
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
        throw new Error(`[signup]: ${error}`)
    }
}