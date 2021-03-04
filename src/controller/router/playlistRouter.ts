import express from "express";
import { PlaylistController } from "../PlaylistController";

export const playlistRouter = express.Router()

const playlistController = new PlaylistController()

playlistRouter.post("/create", playlistController.createPlaylist)
playlistRouter.put("/insert", playlistController.putMusicOnPlaylist)
playlistRouter.get("/", playlistController.getAllPlaylist)

