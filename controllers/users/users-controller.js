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
    console.log(users)
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
    app.post('/api/users', createUser);
    app.get('/api/users', findUsers);
    app.get('/api/users/:uid', findUser);
    app.put('/api/users/:uid', updateUser);
    app.delete('/api/users/:uid', deleteUser);
}