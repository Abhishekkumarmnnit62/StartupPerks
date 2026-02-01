import express from "express";
import { claimDeal } from "../controllers/claimController.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

// User claims a deal
router.post("/:dealId", protect, claimDeal);

export default router;
