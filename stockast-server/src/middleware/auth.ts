import jwt from "jsonwebtoken";
import UserModels from "../models/User.models";
import handleResponse from "../utils/handleResponse";

interface DecodedToken {
  uid: string;
}

const auth = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) return res.sendStatus(401);

  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET!) as DecodedToken;
    if (!decode.uid) res.status(500).send("Decoding UserModels id is failed");

    const userResponse = await UserModels.findByUid(decode.uid);
    const user = handleResponse(userResponse, res);

    if (!user) {
      return res.status(400).send("UserModels is not exist");
    }

    (req as any).user = user;
    next();
  } catch (error) {
    next(error);
  }
};

export default auth;
