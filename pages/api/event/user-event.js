import Event from '../../../models/event'

export default async function handler(req, res) {
    console.log('[get users event]: Handler start');
    const { userId } = req.query;
    try {
        const response = await Event.find({ eventAttendees: userId })
        res.send({
            events: response || [],
        });
    } catch (error) {
        console.log('error', error)
        res.status(500).send(error);
    }
}
