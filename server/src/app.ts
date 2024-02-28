import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import indexRouter from "./routes";
import socket from "./socket";

const app = express();
const server = createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

const port = 3000;

socket(io);

app.use("/", indexRouter);

server.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
