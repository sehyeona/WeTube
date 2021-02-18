import app from "./app";

const PORT = 4000;
const listeningHandler = () => console.log(`Listening on: http://localhost:${PORT}`);

app.listen(PORT, listeningHandler);