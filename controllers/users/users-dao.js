import usersModel from './users-model.js';
export const findUsers = () =>
    usersModel.find();
export const findUser = (uid) =>
    usersModel.findOne({_id: uid});
export const createUser = (user) =>
    usersModel.create(user);
export const deleteUser = (uid) =>
    usersModel.deleteOne({_id: uid});
export const updateUser = (uid, user) =>
    usersModel.updateOne({_id: uid}, {$set: user})
export const findUserByUsername = (username) =>
    usersModel.findOne({ userName: username });
export const findUserByCredentials = (username, password) =>
    usersModel.findOne({ username, password });
   
   