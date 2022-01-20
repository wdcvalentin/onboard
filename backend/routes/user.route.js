const router = require("express").Router();
const verify = require("./auth/verifyToken");
const UserModel = require("../model/user");
const bcrypt = require("bcryptjs");

// get all users
router.get("/", async (req, res) => {
    try {
        const users = await UserModel.find({});
        res.send(users)
    } catch (error) {
        res.status(500).send(error)
    }
})

// get a user by id
router.get("/:id", async (req, res) => {
    try {
        const user = await UserModel.findById(req.params.id);
        res.send(user)
    } catch (error) {
        res.status(404).send(error)
    }
})

// create a user 
router.post("/new", async (req, res) => {
    try {
        const emailExist = await UserModel.findOne({email: req.body.email})
        if (emailExist) return res.status(409).send("email already exist")
        else {
            const data = req.body;
            const salt = await bcrypt.genSalt(10)
            data.password = await bcrypt.hash(req.body.password, salt);

            const user = await UserModel.create(data);
            res.send(`user created : ${user}`);
        }

    } catch (error) {
        res.status(500).send(error)
    }
})

// update a user by id
router.put("/:id", async (req, res) => {
    try {
        const data = req.body;
        data.dateUpdate = new Date();

        const user = await UserModel.findByIdAndUpdate(req.params.id, data);
        res.send(`user updated : ${user}`);
    } catch (error) {
        res.status(500).send(error)
    }
})

// delete a user by id
router.delete("/:id", async (req, res) => {
    try {
        await UserModel.findOneAndDelete(req.params.id, req.body);
        res.send("user deleted")
    } catch (error) {
        res.status(500).send(error)
    }
})

module.exports = router