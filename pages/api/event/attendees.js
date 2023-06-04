import Event from '../../../models/event'

export default async function handler(req, res) {
    console.log('[adding attendees to event]: Handler start');
    const { userId, eventId } = req.body;
    try {
        const response = await Event.findOneAndUpdate({ _id: eventId }, { $push: { eventAttendees: { _id: userId } } })
        res.send({
            response: true,
            message: 'User added in event'
        });

    } catch (error) {
        console.log('error', error)
        res.status(500).send(error);
    }
}
