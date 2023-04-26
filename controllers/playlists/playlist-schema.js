import mongoose from "mongoose";

const playlistSchema = mongoose.Schema({
    playlistid:String,
    profileid: String,
    title: String,
    tracksNumber: Number

}, {collection: 'playlists'});
export default playlistSchema