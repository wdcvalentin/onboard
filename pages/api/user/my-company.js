import Company from '../../../models/company'
import User from '../../../models/user'

export default async function handler(req, res) {
    console.log('[get user company]: Handler start');
    const { userId } = req.query;
    try {
        const user = await User.findOne({ _id: userId })
        const company = await Company.findOne({ _id: user.company })
        res.send(company);
    } catch (error) {
        res.status(500).send(error);
    }
}