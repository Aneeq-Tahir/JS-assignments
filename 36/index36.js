class make_album {
    constructor(artist, title, tracks) {
        this.artistName = artist;
        this.albumTitle = title;
        this.tracksNumber = tracks;
    }
}

let album = new make_album("Weeknd", "My Dear Melancholy")
let album2 = new make_album("Talha Anjum", "Open Letter")
let album3 = new make_album("Weeknd", "After Hours")

console.log(album, album2, album3);

album = new make_album("Weeknd", "My Dear Melancholy", 7)

console.log(album);