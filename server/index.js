import express from "express";
import cors from "cors";
import db from "./db/firebase.js";
import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

import dotenv from "dotenv";
import { checkAdmin } from "./middleware/auth.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// Place order: store in Firestore with status 'pending'
app.post("/api/orders", async (req, res) => {
  try {
    const orderData = {
      ...req.body,
      status: "pending",
    };
    const docRef = await addDoc(collection(db, "orders"), orderData);
    res.json({ message: "Order received successfully", id: docRef.id });
  } catch (err) {
    console.error("Error saving order:", err);
    res.status(500).json({ error: "Failed to save order" });
  }
});

// Get all pending orders for admin
app.get("/api/admin/orders", checkAdmin, async (req, res) => {
  try {
    const q = query(collection(db, "orders"), where("status", "==", "pending"));
    const snapshot = await getDocs(q);
    const orders = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    res.json(orders);
  } catch (err) {
    console.error("Error fetching orders:", err);
    res.status(500).json({ error: "Failed to fetch orders" });
  }
});

// Mark order as completed and remove from DB
app.post("/api/admin/orders/:id/complete", async (req, res) => {
  try {
    const orderId = req.params.id;
    await deleteDoc(doc(db, "orders", orderId));
    res.json({ message: "Order marked as completed and removed" });
  } catch (err) {
    console.error("Error marking order as completed:", err);
    res.status(500).json({ error: "Failed to mark order as completed" });
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
