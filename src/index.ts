//const express = require("express");

import Express, { Request, Response } from "express";
import bodyParser from "body-parser";
import { loginRouter } from "./routes/login";
import cors, { CorsOptions } from "cors";
import { productRouter } from "./routes/products";

const app = Express();
const port = 5000;

//var whitelist = ["http://localhost:3000"];
var corsOptions: CorsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.use("/login", loginRouter);
app.use("/products", productRouter);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
