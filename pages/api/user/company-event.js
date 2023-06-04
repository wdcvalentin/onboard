import User from '../../../models/user'
import Event from '../../../models/event'

export default async function handler(req, res) {
    console.log('[get user company event]: Handler start');

    try {
        const user = await User.findById(req.query.id)
        const companyEvents = await Event.find({ eventCompany: user.company }).sort({eventDate: 'desc'}).exec();
        res.send(companyEvents);
    } catch (error) {
        res.status(500).send(error);
    }
}