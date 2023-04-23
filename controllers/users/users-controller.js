import * as usersDao from './users-dao.js';

const createUser = async (req, res) => {
    const newUser = req.body;
    newUser.numEventsAttended = 0;
    newUser.numEventsHosted = 0;
    const insertedUser = await usersDao.createUser(newUser);
    res.json(insertedUser);
}

const findUsers = async (req, res) => {
    const users = await usersDao.findUsers();
    res.json(users);
}

const findUser = async (req, res) => {
    const uid = req.params.uid;
    const user = await usersDao.findUser(uid);
    res.json(user)
}

const updateUser = async (req, res) => {
    const uid = req.params.uid;
    const updates = req.body;
    const status = await usersDao.updateUser(uid, updates)
    res.json(status);
}

const deleteUser = async (req, res) => {
    const uid = req.params.uid;
    const status = await usersDao.deleteUser(uid);
    res.json(status);
}

export default (app) => {
    app.post('/users', createUser);
    app.get('/users', findUsers);
    app.get('/users/:uid', findUser);
    app.put('/users/:uid', updateUser);
    app.delete('/users/:uid', deleteUser);
}