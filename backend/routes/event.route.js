const router = require("express").Router();
const verify = require("./auth/verifyToken");
const EventModel = require("../model/event");

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
        const event = await EventModel.create(req.body);
        res.send("event created : ", event);
    } catch (error) {
        res.status(500).send(error);
    }
})

// update an event by id 
router.put("/:id", async (req, res) => {
    data = req.body;
    data["dateUpdate"] = new Date();

    try {
         const event = await EventModel.findOneAndUpdate(req.params.id, data);
        res.send("job updated : ", event);
    } catch (error) {
        res.status(500).send(error);
    }
})

// delete an event by id
router.delete("/:id", async (req, res) => {
    try {
         await EventModel.findOneAndDelete(req.params.id);
        res.send("job deleted");
    } catch (error) {
        res.status(500).send(error);
    }
})

module.exports = router