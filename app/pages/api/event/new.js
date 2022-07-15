import User from '../../../models/user'
import Event from '../../../models/event'

export default async function handler(req, res) {
    console.log('[create event]: Handler start');

    try {
        const user = await User.findOne({ _id: req.query.id })
        const dataEvent = {
            eventCreator: req.query.id,
            eventCompany: user.company,
            eventDate: req.body.eventDate,
            name: req.body.name,
            description: req.body.description,
        }
        const newEvent = await Event.create(dataEvent);

        res.send(newEvent);
    } catch (error) {
        res.status(500).send(`[create event]: ${error}`);
    }
}
