   
import playlistModel from "./playlists-model.js";

export const findAllPlaylists = () => playlistModel.find();

export const findPlaylistById = (id) => playlistModel.findOne({playlistid:id});

export const findPlaylistsByUserId = (uid) => playlistModel.find({profileid: uid});

export const createPlaylist = (playlist) => playlistModel.create(playlist);

export const deletePlaylist = (id) => playlistModel.deleteOne({playlistid:id});

export const updatePlaylist = (id, playlist) => playlistModel.updateOne({playlistid:id},{$set:playlist});



