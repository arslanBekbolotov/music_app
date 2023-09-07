import mongoose, { Schema, Types } from "mongoose";
import { Artist } from "./Artist";
import { IAlbum } from "../types";

const albumSchema = new Schema<IAlbum>({
  name: {
    type: String,
    required: true,
  },
  artist: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Artist",
    validate: {
      validator: async (value: Types.ObjectId) => Artist.findById(value),
      message: "Artist does not exist!",
    },
  },
  release: {
    type: Schema.Types.Date,
    default: Date(),
    required: true,
  },
  image: String,
});

export const Album = mongoose.model("Album", albumSchema);
