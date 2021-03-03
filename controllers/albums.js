module.exports = {
    index,
    show,
    showtracks,
}

const Album = require('../models/albums-db')

function index(req, res) {
    res.render('albums/index', {albums: Album.getAll()})
}

function show(req, res) {
    res.render('albums/show', {
        album: Album.getOneAlbum(req.params.albumid)})
         
    
    // res.send("Album not found")
}

function showtracks(req, res) {
    res.render('albums/showtracks', {
        album: Album.getOneAlbum(req.params.albumid),
        track: Album.getOneTrack(req.params.albumid, req.params.trackid)
    })
         
    
    // res.send("Album not found")
}
