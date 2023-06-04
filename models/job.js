const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const jobSchema = new Schema({
    dateCreation: {
        type: Date,
        default: Date.now
    },
    dateUpdate: {
        type: Date,
        default: Date.now
    },
    name: {
        type: String,
        required: true,
        min: 3,
        max: 255
    },
    jobUsers: [{
        type: Schema.Types.ObjectId,
        ref: "user"
    }],
})

module.exports = mongoose.model("job", jobSchema)