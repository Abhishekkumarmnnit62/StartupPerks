import express from "express";
import { adminLogin } from "../controllers/adminAuthController.js";
import { createDeal, verifyUser } from "../controllers/adminController.js";
import adminOnly from "../middleware/adminMiddleware.js";

const router = express.Router();

// Admin auth
router.post("/login", adminLogin);

// Admin actions
router.post("/deals", adminOnly, createDeal);
router.patch("/verify-user/:userId", adminOnly, verifyUser);

export default router;
