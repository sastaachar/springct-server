import Express, { Request, Response } from "express";
import { loginUser } from "../controllers/login-ctrl";

const loginRouter = Express.Router();

loginRouter.post("/", loginUser);

export { loginRouter };
