import express from "express";
import PixController from "./controllers/pixController";

const routes = express.Router();

const pixController = new PixController();

routes.get("/create-order", pixController.createOrder);

export default routes;
