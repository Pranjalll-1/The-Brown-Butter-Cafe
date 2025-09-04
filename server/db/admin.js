import admin from "firebase-admin";
import fs from "fs";

// Use Render secret file path if available, else fallback to local
const serviceAccountPath = process.env.RENDER
  ? "/etc/secrets/firebaseServiceAccount.json"
  : "./firebaseServiceAccount.json";
const serviceAccount = JSON.parse(fs.readFileSync(serviceAccountPath, "utf-8"));

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export default admin;
