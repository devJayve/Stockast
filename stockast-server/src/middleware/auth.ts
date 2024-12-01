import jwt from "jsonwebtoken";
import UserModels from "../models/User.models";
import handleResponse from "../utils/handleResponse";
import { RequestHandler } from "express";

interface DecodedToken {
  uid: string;
}

const auth: RequestHandler = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) {
    res.sendStatus(401);
    return;
  }

  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET!) as DecodedToken;
    if (!decode.uid) res.status(500).send("Decoding UserModels id is failed");

    const userResponse = await UserModels.findByUid(decode.uid);
    const user = handleResponse(userResponse, res);

    if (!user) {
      res.status(400).send("UserModels is not exist");
      return;
    }

    (req as any).user = user;
    next();
  } catch (error) {
    next(error);
  }
};

export default auth;
