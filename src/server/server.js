// server.js
import { create, router as _router, defaults } from "json-server";
const server = create();
const router = _router("data.json");
const middlewares = defaults();

server.use(middlewares);
server.use(router);
server.listen(3000, () => {
  console.log("JSON Server is running");
});
