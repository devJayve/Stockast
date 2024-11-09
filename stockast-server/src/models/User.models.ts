import { getConnection } from "./Database";
import UserType from "./../types/User.types";
import Response from "./../types/Response.types";

const UserModel = {
  findByUid: async (uid: string): Promise<Response<UserType>> => {
    let conn = null;
    const res: Response<UserType> = {
      success: false,
      message: "",
      result: null,
    };
    try {
      conn = await getConnection();
      const [rows] = await conn.query("SELECT * FROM Users WHERE uid = ?", [
        uid,
      ]);

      res.success = true;
      res.message = "Success";
      res.result = rows[0] as UserType;
    } catch (error) {
      console.error("Error in findByUid:", error);
      res.message = "Error retrieving user";
    } finally {
      if (conn) conn.release();
    }
    return res;
  },

  create: async (userData: UserType): Promise<Response<UserType>> => {
    // 반환 타입 지정
    let conn = null;
    const res: Response<UserType> = {
      // 응답 타입 지정
      success: false,
      message: "",
      result: null,
    };
    try {
      conn = await getConnection();

      // 사용자 데이터 삽입
      await conn.query(
        "INSERT INTO Users (uid, displayName, email, phoneNumber, photoURL, providerId) VALUES (?, ?, ?, ?, ?, ?)",
        [
          userData.uid,
          userData.displayName,
          userData.email,
          userData.phoneNumber,
          userData.photoURL,
          userData.providerId,
        ],
      );

      // 삽입된 사용자 데이터 다시 조회
      const [rows] = await conn.query("SELECT * FROM Users WHERE uid = ?", [
        userData.uid,
      ]);
      const user = rows[0] as UserType;

      res.success = true;
      res.message = "UserModels created";
      res.result = user;
    } catch (error) {
      console.error("Error in create:", error);
      res.message = "Error creating user";
    } finally {
      if (conn) conn.release();
    }
    return res;
  },
};

export default UserModel;
