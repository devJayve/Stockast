// Import RequestHandler for explicit typing
import { Request, Response, RequestHandler } from "express";
import UserModel from "../models/User.models";
import UserType from "../types/User.types";
import jwt from "jsonwebtoken";

// 로그인 및 회원가입 (구글)
const loginGoogleUser: RequestHandler = async (req, res, next) => {
  try {
    const { uid } = req.body as { uid: string };

    // 유저 조회 및 생성 처리
    let user = (await UserModel.findByUid(uid)) as UserType | null;
    if (!user) {
      user = await UserModel.create(req.body);
    }

    if (!user) {
      res.status(500).json({ message: "User creation failed" });
      return;
    }

    // JWT 토큰 생성
    const accessToken = jwt.sign(
      { uid: user.uid },
      process.env.JWT_SECRET as string,
      {
        expiresIn: "12h",
      }
    );

    res.status(200).json({ user, accessToken });
  } catch (error) {
    console.error("Error in /login/google:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const logoutUser: RequestHandler = async (req, res, next) => {
  try {
    res.clearCookie("session");
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const authUser: RequestHandler = async (req, res, next) => {
  try {
    const user = (req as any).user as UserType;
    res.json({
      uid: user.uid,
      displayName: user.displayName,
      email: user.email,
      phoneNumber: user.phoneNumber,
      photoURL: user.photoURL,
      providerId: user.providerId,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export { loginGoogleUser, logoutUser, authUser };