const router = require("express").Router();
const verify = require("./auth/verifyToken");
const CompanyModel = require("../model/company");
const UserModel = require("../model/user");

// get members of a company by id
router.get("/members", verify, async (req, res) => {
    try {
        const uid = req.user;
        const user = await UserModel.findById(uid)
        const members = await UserModel.find({ company: user.company })
        res.send(members);
    } catch (error) {
        res.status(500).send(error);
    }
})

// get all companies
router.get("/", async (req, res) => {
    try {
        const companies = await CompanyModel.find({});
        res.send(companies)
    } catch (error) {
        res.status(500).send(error)
    }
})

// get a company by id
router.get("/:id", async (req, res) => {
    try {
        const company = await CompanyModel.findById(req.params.id);
        res.send(company);
    } catch (error) {
        res.status(404).send(error);
    }
})


// create a company 
router.post("/new", async (req, res) => {
    try {
        const company = await CompanyModel.create(req.body);
        res.send(`company created : ${company}`);
    } catch (error) {
        res.status(500).send(error);
    }
})

// update a company by id 
router.put("/:id", async (req, res) => {
    try {
        const data = req.body;
        data.dateUpdate = new Date();

        const company = await CompanyModel.findOneAndUpdate(req.params.id, data);
        res.send(`company updated : ${company}`);
    } catch (error) {
        res.status(500).send(error);
    }
})

// delete a company by id
router.delete("/:id", async (req, res) => {
    try {
         await CompanyModel.findOneAndDelete(req.params.id);
        res.send("company deleted");
    } catch (error) {
        res.status(500).send(error);
    }
})

// custom request

module.exports = router