import eventsModel from "./events-model.js";

export const findEvents = () => eventsModel.find();

export const findEventsById = (eid) => eventsModel.findOne({_id:eid})

export const findEventsByCreatedId = (createdId) => eventsModel.find({createdBy:createdId})

export const createEvents = (event) => eventsModel.create(event)

export const deleteEvents = (eid) => eventsModel.deleteOne({_id:eid})

export const updateEvents = (eid,eventItem) => eventsModel.updateOne({_id:eid},{$set: eventItem})