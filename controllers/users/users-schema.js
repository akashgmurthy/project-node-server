import mongoose from 'mongoose';
const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    email: String,
    avatar: { type: String, default: "avatar-default.jpg" },
    bannerColor: { type: String, default: "blue" },
    numEventsAttended: { type: Number, default: 0 },
    numEventsHosted: { type: Number, default: 0 },
    isCreator: Boolean,
    isAdmin: { type: Boolean, default: false },
}, {collection: 'users'});
export default userSchema