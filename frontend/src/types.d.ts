export interface IArtist{
    _id:string,
    image:string,
    name:string,
}

export interface IAlbum{
    _id:string,
    name:string,
    artist:string,
    release:string,
    image:string,
}