const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const userSchema = new Schema({
    dateCreation: {
        type: Date,
        default: Date.now
    },
    dateUpdate: {
        type: Date,
        default: Date.now
    },
    firstName: {
        type: String,
        required: true,
        min: 2,
        max: 255
    },
    lastName: {
        type: String,
        required: true,
        min: 1,
        max: 255
    },
    email: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    biography: {
        type: String,
        max: 255
    },
    // user work
    company: {
        type: Schema.Types.ObjectId,
        ref: "company"
    },
    job: {
        type: Schema.Types.ObjectId,
        ref: "job"
    },
    // event relations
    eventsCreated: [{
        type: Schema.Types.ObjectId,
        ref: "event"
    }],
    eventsAttended: [{
        type: Schema.Types.ObjectId,
        ref: "event"
    }],
})

module.exports = mongoose.model("user", userSchema)