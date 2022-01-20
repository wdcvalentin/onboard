const router = require("express").Router();
const verify = require("./auth/verifyToken");
const EventModel = require("../model/event");
const UserModel = require("../model/user");

// get all events
router.get("/", async (req, res) => {
    try {
        const events = await EventModelModel.find({});
        res.send(events)
    } catch (error) {
        res.status(500).send(error)
    }
})

// get an event by id
router.get("/:id", async (req, res) => {
    try {
        const event = await EventModelModel.findById(req.params.id);
        res.send(event);
    } catch (error) {
        res.status(404).send(error);
    }
})


// create an event 
router.post("/new", async (req, res) => {
    try {
        const data = req.body;
        const user = await UserModel.findById(data.eventCreator)
        data.eventCompany = user.company._id;

        const event = await EventModel.create(data);
        res.send(`event created : ${event}`);
    } catch (error) {
        res.status(500).send(error);
    }
})

// update an event by id 
router.put("/:id", async (req, res) => {
    try {
        const data = req.body;
        data.dateUpdate = new Date();

         const event = await EventModel.findOneAndUpdate(req.params.id, data);
         res.send(`event updated : ${event}`);
    } catch (error) {
        res.status(500).send(error);
    }
})

// delete an event by id
router.delete("/:id", async (req, res) => {
    try {
         await EventModel.findOneAndDelete(req.params.id);
        res.send("event deleted");
    } catch (error) {
        res.status(500).send(error);
    }
})

// custom request

// add participant to event
router.patch("/:id/:uid", async (req, res) => {
    const eid = req.params.id;
    const uid = req.params.uid;
    try {
        const eventToCheck = await EventModel.findById(eid);
        const checkIfUserParticipate = obj => obj == uid;

        if( eventToCheck.eventAttendees.some(checkIfUserParticipate) ) {
            res.send(`user ${uid} is already participating to this event`);
        } else {
            await EventModel.findOneAndUpdate(eid, { $push: { eventAttendees : { _id : uid }}})
            res.send(`user ${uid} added to event : ${eid} `);
        }
    } catch (error) {
        res.status(500).send(error);
    }
})

module.exports = router