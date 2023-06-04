import { Schema, model, models } from 'mongoose';

const activitySchema = new Schema({
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
    description: {
        type: String,
        min: 1,
        max: 255
    },
    activityCreator: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "user"
    },
    activityCompany: {
        type: Schema.Types.ObjectId,
        required:true,
        ref: "company"
    },
    activityAttendees: [{
        type: Schema.Types.ObjectId,
        ref: "user"
    }],
    activityDate: {
        type: Date,
        required: true,
    },
})

const Activity = models.activity || model("activity", activitySchema)

export default Activity