const router = require("express").Router();
const verify = require("./auth/verifyToken");
const JobModel = require("../model/job");

// get all jobs
router.get("/", async (req, res) => {
    try {
        const jobs = await JobModel.find({});
        res.send(jobs)
    } catch (error) {
        res.status(500).send(error)
    }
})

// get a job by id
router.get("/:id", async (req, res) => {
    try {
        const job = await JobModel.findById(req.params.id);
        res.send(job);
    } catch (error) {
        res.status(404).send(error);
    }
})


// create a job 
router.post("/new", async (req, res) => {
    try {
        const job = await JobModel.create(req.body);
        res.send("job created : ", job);
    } catch (error) {
        res.status(500).send(error);
    }
})

// update a job by id 
router.put("/:id", async (req, res) => {
    data = req.body;
    data["dateUpdate"] = new Date();

    try {
         const job = await JobModel.findOneAndUpdate(req.params.id, data);
        res.send("job updated : ", job);
    } catch (error) {
        res.status(500).send(error);
    }
})

// delete a job by id
router.delete("/:id", async (req, res) => {
    try {
         await JobModel.findOneAndDelete(req.params.id);
        res.send("job deleted");
    } catch (error) {
        res.status(500).send(error);
    }
})

module.exports = router