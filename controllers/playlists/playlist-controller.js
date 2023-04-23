import * as playlistDao from './playlists-dao.js';

const PlaylistController = (app) => {
    app.get('/playlists',findAllPlaylists);
    app.get('/playlists/:pid',findPlaylistById);
    app.get('/playlists/users/:uid',findPlaylistsByUserId);
    app.post('/playlists',createPlaylist)
    app.delete('/playlists/:pid',deletePlaylist)
    app.put('/playlists/:pid',updatePlaylist)
    
}

const findAllPlaylists = async(req,res) =>{
    const playlists = await playlistDao.findAllPlaylists();
    res.json(playlists);
}

const findPlaylistById = async(req,res) =>{
    const id = req.params.pid;
    const response  = await playlistDao.findPlaylistById(id);
    res.json(response)

}

const findPlaylistsByUserId = async(req,res) => {
    const userid = req.params.uid;
    const response =  await playlistDao.findPlaylistsByUserId(userid);
    res.json(response);
}

const createPlaylist = async(req,res) => {
    const newPlaylist = req.body;
    const inserted = await playlistDao.createPlaylist(newPlaylist);
    res.json(inserted)
}

const deletePlaylist = async(req,res) =>{
    const pidtodelete = req.params.pid;
    const status = await playlistDao.deletePlaylist(pid);
    res.json(status);
}

const updatePlaylist = async(req,res) =>{
    const pidtoupdate = req.params.pid;
    const update = req.body;
    const status = await playlistDao.updatePlaylist(pidtoupdate,update)
    res.json(status);
}

export default PlaylistController;