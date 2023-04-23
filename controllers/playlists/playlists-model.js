
import mongoose from "mongoose";
import playlistSchema from "./playlist-schema.js";

const playlistModel = mongoose.model('PlaylistsModel',playlistSchema);

export default playlistModel;