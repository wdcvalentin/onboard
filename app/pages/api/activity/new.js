import User from '../../../models/user'
import Activity from '../../../models/activity'

export default async function handler(req, res) {
    console.log('[create Activity]: Handler start');

    try {
        const user = await User.findOne({ _id: req.query.id })
        const dataActivity = {
            activityCreator: req.query.id,
            activityCompany: user.company,
            activityDate: req.body.activityDate,
            name: req.body.name,
            description: req.body.description,
        }
        const newActivity = await Activity.create(dataActivity);
        res.send(newActivity);
    } catch (error) {
        res.status(500).send(`[create Activity]: ${error}`);
    }
}
