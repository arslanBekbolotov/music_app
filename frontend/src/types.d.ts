export interface IArtist {
  _id: string;
  user: string;
  image: string;
  name: string;
  isPublished: boolean;
}

export interface IAlbum {
  _id: string;
  artist: string;
  name: string;
  user: string;
  release: string;
  image: string;
  count: number;
  isPublished: boolean;
}

export type IAlbumFormMutation = {
  artist: string;
  name: string;
  release: string;
  image: File | null;
};

export interface IAlbumMutation extends IAlbum {
  artist: IArtist;
}

export interface IArtistMutation {
  _id: string;
  name: string;
}

export type IArtistFormMutation = {
  name: string;
  image: File | null;
};

export interface IAlbumApi {
  albums: IAlbum[];
  artist: IArtistMutation;
}

export interface ITrack {
  _id: string;
  name: string;
  user: string;
  album: string;
  image?: string;
  youtubeLink?: string;
  number: number;
  duration: string;
  mp3File?: string;
  isPublished: boolean;
}

export interface ITrackApi {
  tracks: ITrack[];
  album: IAlbumMutation;
}

export interface ITrackFormMutation {
  name: string;
  album: string;
  image: File | null;
  youtubeLink?: string;
  number: string;
  duration: string;
  mp3File: File | null;
}

export interface RegisterMutation {
  username: string;
  password: string;
  avatar: File | null;
  displayName: string;
}

export interface LoginMutation {
  username: string;
  password: string;
}

export interface RegisterResponse {
  user: User;
  message: string;
}

export interface GlobalError {
  error: string;
}

export interface IUser {
  _id: string;
  displayName: string;
  avatar?: string;
  username: string;
  token: string;
  role: string;
  password: string;
  googleID?: string;
}

interface ITrackArtistMutation {
  _id: string;
  name: string;
}

interface ITrackAlbumMutation {
  _id: string;
  name: string;
  artist: ITrackArtistMutation;
}

interface ITrackMutation {
  _id: string;
  name: string;
  album: ITrackAlbumMutation;
}

export interface ITracksHistory {
  _id: string;
  user: string;
  track: ITrackMutation;
  date: string;
}

export interface ValidationError {
  errors: {
    [key: string]: {
      name: string;
      message: string;
    };
  };
  message: string;
  name: string;
  _message: string;
}

export interface IAdminApi {
  tracks: ITrack[];
  albums: IAlbum[];
  artists: IArtist[];
}
