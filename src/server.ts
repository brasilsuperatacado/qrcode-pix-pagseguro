import app from "./app";
import 'dotenv/config'

const server = app
const port = 3000;

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
