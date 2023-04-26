import * as usersDao from "./users-dao.js";


const AuthController = (app) => {
    const register = async (req, res) => {
        const { username, password, userNew } = req.body;
        console.log("In register server side")
        console.log(userNew)
        const user = await usersDao
            .findUserByUsername(username);
        if (user) {
            res.sendStatus(409);
            return;
        }
        const newUser = await usersDao
            .createUser(userNew);
        req.session["currentUser"] = newUser;
        res.json(newUser);
    };
    const login = async (req, res) => {
        const username = req.body.username;
        const password = req.body.password;
        const user = await usersDao
            .findUserByCredentials(username, password);
        if (user) {
            req.session["currentUser"] = user;
            res.json(user);
        } else {
            res.sendStatus(404);
        }
    };
    const profile = async (req, res) => {
        console.log("profile")
        console.log(req.session["currentUser"])
        const currentUser = req.session["currentUser"];
        if (!currentUser) {
            res.sendStatus(404);
            return;
        }
        res.json(currentUser);
    };
    const logout = async (req, res) => {
        req.session.destroy();
        res.sendStatus(200);
    };
    const update   = async (req, res) => {
        const uid = req.params.uid;
        const updates = req.body;
        const status = await usersDao.updateUser(uid, updates)
        res.send(status);


     };


    app.post("/users/register", register);
    app.post("/users/login",    login);
    app.post("/users/profile",  profile);
    app.post("/users/logout",   logout);
    app.put ("/users/:uid",    update);
};
export default AuthController;
