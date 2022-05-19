import { RequestHandler } from "express";

const checkAuth: RequestHandler = async (req, res, next) => {
  try {
    console.log(req.cookies);
    next();
  } catch (e: unknown) {
    console.log(e);
  }
};

export { checkAuth };
