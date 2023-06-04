import { Schema, model, models } from 'mongoose';

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

const Company = models.company || model("company", companySchema)

export default Company