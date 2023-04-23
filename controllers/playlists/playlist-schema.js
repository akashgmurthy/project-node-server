import mongoose from "mongoose";

const playlistSchema = mongoose.Schema({
    playlistid:String,
    profileid: String
}, {collection: 'playlists'});
export default playlistSchema