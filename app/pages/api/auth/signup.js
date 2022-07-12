import { connectMongo } from "../../../utils/connectMongo";
import { registerValidation } from "../../../utils/validation";
import User from "../../../models/user";
import bcrypt from 'bcryptjs';

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

        return res.send(true)
    } catch (error) {
        throw new Error(`[signup]: ${error}`)
    }
}