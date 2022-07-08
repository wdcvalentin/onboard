import { connectMongo } from "../../utils/connectMongo";
import { loginValidation } from "../../utils/validation";
import User from "../../models/user";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'

export default async function handler(req, res) {
    const { error } = loginValidation(req.body)

    if (error) return res.status(401).send({
        message: "Type validation is incorrect",
        response: false
    })

    try {
        await connectMongo();
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
    } catch (error) {
        throw new Error(`[login]: ${error}`)
    }
}