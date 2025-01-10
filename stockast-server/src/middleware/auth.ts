import jwt from "jsonwebtoken";
import UserModels from "../models/User.models";
import handleResponse from "../utils/handleResponse";
import { RequestHandler } from "express";
import { ResponseFormat } from "../types/ResponseFormat";
import UserType from "../types/User.types";

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
    console.log(token);

    const decode = jwt.verify(token, process.env.JWT_SECRET!) as DecodedToken;

    console.log("decode : ", decode);
    if (!decode.uid) {
      res.status(500).send("Decoding UserModels id is failed");
      return;
    }

    const userResponse: ResponseFormat<UserType> = await UserModels.findByUid(
      decode.uid,
    );

    if (!userResponse.result) {
      res.status(400).send("UserModels is not exist");
      return;
    }

    (req as any).user = userResponse.result;
    next();
  } catch (error) {
    console.error(error);
    next(error);
  }
};

export default auth;
