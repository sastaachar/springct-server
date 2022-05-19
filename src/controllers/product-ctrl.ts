import { Request, Response } from "express";

import products from "../../static/products.json";
import { Products } from "../models/products";

const getProducts = async (req: Request, res: Response) => {
  //const productsData = products as unknown as Products;
  res.status(200).send(products);
};
export { getProducts };
