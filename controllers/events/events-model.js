import mongoose from "mongoose";
import events_schema from "./events-schema.js";

const eventsModel  = mongoose.model('EventModel',events_schema);

export default eventsModel