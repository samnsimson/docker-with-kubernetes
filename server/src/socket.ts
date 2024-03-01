import { Server } from "socket.io";
import { DefaultEventsMap } from "socket.io/dist/typed-events";

const clients = new Map();

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const socket = (io: Server<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>) => {
    const room = "public-room";
    const namespace = io.of("/socket");
    namespace.on("connection", (socket) => {
        const { clientid } = socket.handshake.query;
        clients.set(clientid, socket);
        socket.join(room);
        socket.emit("MESSAGE", { pid: process.pid, message: "Welcome!" });
        socket.on("disconnect", () => {
            clients.delete(clientid);
            socket.to(room).emit("MESSAGE", "Client disconnected");
            console.log(`client ${socket.id} disconnected`);
        });
    });
};

export default socket;
