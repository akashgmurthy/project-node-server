import mongoose from "mongoose";

const events_schema = mongoose.Schema({
    eventName: String,
    artist: String,
    location: String,
    description: String,
    city: String,
    date: Date,
    time: String,
    image: String,
    createdAt: {
        type: Date,
        default:Date.now
    },
    createdBy:String
}, {collection:'events'});

export default events_schema