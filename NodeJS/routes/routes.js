import express from "express";
import saveMessage, {getMessages} from '../controllers/ChatOperations.js';
const routes = express.Router();
routes.get("/getmessages",getMessages);
routes.post("/savemessage",saveMessage);
export default routes;