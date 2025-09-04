import admin from "firebase-admin";
import fs from "fs";

//admin
const serviceAccount = JSON.parse(
  fs.readFileSync("./firebaseServiceAccount.json", "utf-8")
);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export default admin;
