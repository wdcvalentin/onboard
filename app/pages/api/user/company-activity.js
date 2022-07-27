import User from '../../../models/user'
import Activity from '../../../models/activity'

export default async function handler(req, res) {
    console.log('[get user company activities]: Handler start');

    try {
        const user = await User.findById(req.query.id)
        const companyActivities = await Activity.find({ activityCompany: user.company }).sort({ activityDate: 'desc' }).exec();
        res.send(companyActivities);
    } catch (error) {
        res.status(500).send(error);
    }
}