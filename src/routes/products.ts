import Express, { Request, Response } from "express";
import { loginUser } from "../controllers/login-ctrl";
import { getProducts } from "../controllers/product-ctrl";
import { checkAuth } from "../middleware/auth";

// /products

const productRouter = Express.Router();

productRouter.get("/", checkAuth, getProducts);

export { productRouter };
