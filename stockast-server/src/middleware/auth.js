const jwt = require("jsonwebtoken");
const User = require("../models/User");
const handleResponse = require("./../utils/handleResponse");

let auth = async (req, res, next) => {
  const authHeader = req.headers["authorization"];

  const token = authHeader && authHeader.split(" ")[1];
  if (token === null) return res.sendStatus(401);

  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET);

    console.log(`uid in auth middleware : ${decode.uid}`);

    const user = handleResponse(await User.findByUid(decode.uid));

    console.log(`auth user : ${JSON.stringify(user)}`);

    if (!user) {
      return res.status(400).send("없는 유저입니다.");
    }

    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = auth;
