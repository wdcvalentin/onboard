const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const companySchema = new Schema({
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
    workers: [{
        type: Schema.Types.ObjectId,
        ref: "user"
    }],
})

module.exports = mongoose.model("company", companySchema)