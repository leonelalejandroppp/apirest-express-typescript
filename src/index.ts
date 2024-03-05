import Server from "./Server";

const PORT = 3000;
const server: Server = new Server(PORT);
server.start()