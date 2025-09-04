import admin from "../db/admin.js";

export const checkAdmin = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const decodedToken = await admin.auth().verifyIdToken(token);
    const userEmail = decodedToken.email;
    const adminEmail = process.env.ADMIN_EMAIL;

    if (userEmail !== adminEmail) {
      return res.status(403).json({ error: "Forbidden: Admin Only" });
    }

    req.user = decodedToken;
    next();
  } catch (err) {
    console.error("Auth error: ", err);
  }
};
