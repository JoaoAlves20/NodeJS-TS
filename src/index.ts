import { createServer } from "node:http";

const server = createServer((request, response) => {
  response.end("Hello, World!");
})

server.listen(3000, () => console.log("Server is running on http://localhost:3000"));