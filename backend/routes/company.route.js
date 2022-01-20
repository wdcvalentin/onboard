const router = require("express").Router();
const verify = require("./auth/verifyToken");
const Company = require("../model/company");

// get all companies
router.get("/", async (req, res) => {
    try {
        const companies = await Company.find({});
        res.send(companies)
    } catch (error) {
        res.status(500).send(error)
    }
})

// get a company by id
router.get("/:id", async (req, res) => {
    try {
        const company = await Company.findById(req.params.id);
        res.send(company);
    } catch (error) {
        res.status(404).send(error);
    }
})


// create a company 
router.post("/new", async (req, res) => {
    try {
        const company = await Company.create(req.body);
        res.send("company created : ", company);
    } catch (error) {
        res.status(500).send(error);
    }
})

// update a company by id 
router.put("/:id", async (req, res) => {
    data = req.body;
    data["dateUpdate"] = new Date();

    try {
        const company = await Company.findOneAndUpdate(req.params.id, data);
        res.send("company updated : ", company);
    } catch (error) {
        res.status(500).send(error);
    }
})

// delete a company by id
router.delete("/:id", async (req, res) => {
    try {
         await Company.findOneAndDelete(req.params.id);
        res.send("company deleted");
    } catch (error) {
        res.status(500).send(error);
    }
})

module.exports = router