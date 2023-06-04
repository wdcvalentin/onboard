import { Schema, model, models } from 'mongoose';

const eventSchema = new Schema({
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
    eventCreator: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "user"
    },
    eventCompany: {
        type: Schema.Types.ObjectId,
        required:true,
        ref: "company"
    },
    eventAttendees: [{
        type: Schema.Types.ObjectId,
        ref: "user"
    }],
    eventDate: {
        type: Date,
        required: true,
    },
})

const Event = models.event || model("event", eventSchema)

export default Event