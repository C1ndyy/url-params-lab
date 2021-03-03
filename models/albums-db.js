let albumsArray = [
    {id: "a0",
    name: "Thriller",
    artist: "Michael Jackson",
    tracks: [
        {id: "t0", name: "Wanna be Startin' Somethin'"},
        {id: "t1", name: "Beat it"},
        {id: "t2", name: "Billie Jean"},
        {id: "t3", name: "Thriller"},]
    },
    {id: "001", 
    name: "Baby One More Time",
    artist: "Britney Spears",
    tracks: [
        {id: "t0", name: "Born to Make You Happy"},
        {id: "t1", name: "Baby One More Time"},
        {id: "t2", name: "I Will Be There"},
        {id: "t3", name: "Sometimes"},]
    },
    {id: "002", 
    name: "Ladies' Night", 
    artist: "Kool & the Gang",
    tracks: [
        {id: "t0", name: "Ladies' Night"},
        {id: "t1", name: "Got You Into My Life"},
        {id: "t2", name: "Too Hot"},
        {id: "t3", name: "Hangin' Out"},]
    }
]

module.exports = {
    getAll,
    getOneAlbum,
    getOneTrack,
};

function getAll() {
    return albumsArray;
}

function getOneAlbum(albumid) {
    return albumsArray.find(album => album.id ===albumid);
} 

function getOneTrack(albumid,trackid) {
    let thisAlbum = albumsArray.find(album => album.id ===albumid);
    return thisAlbum.tracks.find(track => track.id === trackid);
} 