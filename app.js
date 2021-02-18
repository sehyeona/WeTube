import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import {localsMiddleware} from "./middleware";

import routes from "./routes";

const app = express();


app.set("view engine", "pug");

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(helmet());
app.use(localsMiddleware);
app.use(morgan("dev"));


app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);
app.use(routes.home, globalRouter)

export default app;