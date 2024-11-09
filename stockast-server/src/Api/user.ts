import { Request, Response } from "express";
import handleResponse from "../utils/handleResponse";
import UserModel from "../models/User.models";
import UserType from "../types/User.types";
import jwt from "jsonwebtoken";

// 로그인 및 회원가입 (구글)
const loginGoogleUser = async (req: Request, res: Response) => {
  try {
    const { uid } = req.body as { uid: string };

    // 유저 조회 및 생성 처리
    let user = handleResponse(
      await UserModel.findByUid(uid),
      res,
    ) as UserType | null;
    if (!user) {
      user = handleResponse(
        await UserModel.create(req.body),
        res,
      ) as UserType | null;
    }

    if (!user) {
      return res.status(500).json({ message: "User creation failed" });
    }

    // JWT 토큰 생성
    const accessToken = jwt.sign(
      { uid: user.uid },
      process.env.JWT_SECRET as string,
      {
        expiresIn: "12h",
      },
    );

    return res.status(200).json({ user, accessToken });
  } catch (error) {
    console.error("Error in /login/google:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const logoutUser = async (req: Request, res: Response) => {
  try {
    res.clearCookie("session");
    return res.status(200);
  } catch (error) {
    return res.status(500);
  }
};

const authUser = async (req: Request, res: Response) => {
  const user = (req as any).user as UserType;
  return res.json({
    uid: user.uid,
    displayName: user.displayName,
    email: user.email,
    phoneNumber: user.phoneNumber,
    photoURL: user.photoURL,
    providerId: user.providerId,
  });
};

export { loginGoogleUser, logoutUser, authUser };
