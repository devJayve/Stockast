const app = require("express");
const jwt = require("jsonwebtoken");
const User = require("./../models/User");
const auth = require("../middleware/auth");
const router = app.Router();
const handleResponse = require("./../utils/handleResponse.js");

// 로그인 및 회원가입 (구글)
router.post("/login/google", async (req, res) => {
  try {
    const { uid } = req.body;
    console.log(`uid in login : ${uid}`);

    // 유저 조회 및 생성 처리
    let user = handleResponse(await User.findByUid(uid), res);
    if (!user) user = handleResponse(await User.create(req.body), res);

    console.log(`uid in after choose user : ${user.uid}`);

    // JWT 토큰 생성
    const accessToken = jwt.sign({ uid: user.uid }, process.env.JWT_SECRET, {
      expiresIn: "12h",
    });

    let decode = jwt.verify(accessToken, process.env.JWT_SECRET);
    console.log(`immediately decode uid : ${decode.uid}`);

    return res.status(200).json({ user, accessToken });
  } catch (error) {
    console.error("Error in /login/google:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

// 로그아웃
router.post("/logout", (req, res) => {
  res.clearCookie("session");
  return res.sendStatus(200);
});

// 유저 인증
router.get("/auth", auth, (req, res) => {
  return res.json({
    uid: req.user.uid,
    displayName: req.user.displayName,
    email: req.user.email,
    phoneNumber: req.user.phoneNumber,
    photoURL: req.user.photoURL,
    providerId: req.user.providerId,
  });
});

router.head("/verify", (req, res) => {
  const auth = req.headers.authorization;
  console.log(auth);

  if (!auth || !auth.startsWith("Bearer ")) {
    console.log("unauthorized");
    return res.status(401).send("token or header is problem");
  }
  const token = auth.split(" ")[1];

  try {
    jwt.verify(token, process.env.JWT_SECRET);

    return res.sendStatus(200);
  } catch (error) {
    console.log("verify failed", error);
    return res.status(401).send("Token verification failed");
  }
});

module.exports = router;
