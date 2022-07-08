const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const sponsorSchema = new Schema({
    dateCreation: {
        type: Date,
        default: Date.now
    },
    dateUpdate: {
        type: Date,
        default: Date.now
    },
    godFather: {
        type: Schema.Types.ObjectId,
        ref: "user"
    },
    godSon: {
        type: Schema.Types.ObjectId,
        ref: "user"
    },
})

module.exports = mongoose.model("sponsor", sponsorSchema)