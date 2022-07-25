import User from '../../../models/user'

export default async function handler(req, res) {
    console.log('[get team members]: Handler start');

    try {
        const user = await User.findById(req.query.id)
        const members = await User.find({ company: user.company })
        res.send(members);
    } catch (error) {
        res.status(500).send(error);
    }
}