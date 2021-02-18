import express from "express";
import routes from "../routes";
import {editVideo, uploadVideo} from "../controller/videoController";

const videoRouter = express.Router();

videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.uploadVideo, uploadVideo);

export default videoRouter;