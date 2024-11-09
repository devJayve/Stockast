const { getConnection } = require("./Database");

const User = {
  findByUid: async (uid) => {
    let conn = null;
    const res = {
      success: false,
      message: "",
      result: null,
    };
    try {
      conn = await getConnection();

      console.log(`uid in findByUid : ${uid}`);
      const [rows] = await conn.query("SELECT * FROM Users WHERE uid= ?", [
        uid,
      ]);

      res.success = true;
      res.message = "Success";
      res.result = rows[0];
    } catch (error) {
      console.error(error);
      res.message = "Error retrieving user";
    } finally {
      if (conn) conn.release();
    }
    return res;
  },

  create: async ({
    uid,
    displayName,
    email,
    phoneNumber,
    photoURL,
    providerId,
  }) => {
    let conn = null;
    let res = {
      success: false,
      message: "",
      result: null,
    };
    try {
      conn = await getConnection();

      await conn.query(
        "INSERT INTO Users (uid, displayName, email, phoneNumber, photoURL, providerId) VALUES (?, ?, ?, ?, ?, ?)",
        [uid, displayName, email, phoneNumber, photoURL, providerId],
      );

      const [rows] = await conn.query("SELECT * FROM Users WHERE uid = ?", [
        uid,
      ]);
      const user = rows[0];

      res.success = true;
      res.message = "User created";
      res.result = user;
    } catch (error) {
      console.error(error);
    } finally {
      if (conn) conn.release();
    }
    return res;
  },
};

module.exports = User;
