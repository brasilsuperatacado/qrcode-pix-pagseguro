import express from "express";
import routes from "./routes";
import axios from "axios";

const app = express();
app.use(axios)
app.use(express.json());
app.use(routes);

export default app;
