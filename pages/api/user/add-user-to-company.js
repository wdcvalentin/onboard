import User from '../../../models/user'
import Company from '../../../models/company'

export default async function handler(req, res) {
    console.log('[add user to company]: Handler start');
    const { userId, companyId } = req.body;
    try {
        const company = await Company.findOneAndUpdate({ _id: companyId }, { $push: { workers: { _id: userId } } })
        res.send(company);
    } catch (error) {
        res.status(500).send(error);
    }
}