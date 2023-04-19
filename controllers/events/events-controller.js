import * as eventsDao from './events-dao.js'
import multer from 'multer';

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });


const EventController = (app) =>{
    app.get('/events',findEvents);
    app.get('/events/:eid',findEventsById)
    app.get('/events/created/:eid',findEventsByCreatedId)
    app.post('/events',createEvents);
    app.delete('/events/:eid',deleteEvents)
    app.put('/events/:eid',updateEvents)
}
const findEvents = async (req,res) => {
    const events = await eventsDao.findEvents()
    res.json(events)
}

export const findEventsByCreatedId = async (req,res) => {
    const createdId = req.params.eid;
    const status = await eventsDao.findEventsByCreatedId(createdId)
    res.json(status)
}

const createEvents = async (req,res) => {
    const newEvent = req.body;
    const insertedEvent = await eventsDao.createEvents(newEvent);
    res.json(insertedEvent)
}


const deleteEvents = async (req,res) => {
    const eidtodelete = req.params.eid
    const status = await eventsDao.deleteEvents(eidtodelete)
    res.json(status)
}

const findEventsById =  async(req,res) => {
    const eidtofetch = req.params.eid
    const status = await eventsDao.findEventsById(eidtofetch)
    res.json(status)
}

const updateEvents = async(req,res) => {
    const eidtoupdate = req.params.eid;
    const updates =  req.body;
    console.log("Server side")
    console.log(updates)
    const status = await eventsDao.updateEvents(eidtoupdate,updates);
    res.json(status)
}
export default EventController;