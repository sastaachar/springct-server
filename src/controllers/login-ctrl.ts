import { Request, Response } from "express";

import users from "../../static/users.json";
import { Users } from "../models/user";

const loginUser = async (req: Request, res: Response) => {
  // login req.body.userid & req.body.pass

  console.log("Login req..");

  if (!req.body) {
    res.status(301).send({
      message: "Invalid body",
    });
    return;
  }
  const userid: string = req.body.userid;
  const pass: string = req.body.pass;

  if (!req.body) {
    res.status(301).send({
      message: "Userid and pass requied",
    });
    return;
  }
  const userdata = users as Users;

  console.log("Login params", userid, pass);
  if (!userdata[userid] || userdata[userid].pass != pass) {
    res.status(404).send({
      message: "User not found or wrong password",
    });
    return;
  }
  // we can use JWT here
  const token = userdata[userid].admin ? "adminToken" : "userToken";

  console.log("Setting cookies");

  res.cookie("springct", token, { maxAge: 360000, httpOnly: false });
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  //   res.send({ token: userdata[userid].admin ? "admin" : "user" });
  res.status(200).json({
    message: {
      userid: userid,
      admin: userdata[userid].admin,
    },
  });

  //   if (!users[userid]) res.status(404).send("User not found");
  //   if (users[userid].pass != pass) res.status(404).send("User not found");
};
export { loginUser };
