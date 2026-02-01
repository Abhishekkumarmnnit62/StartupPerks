import Deal from "../models/Deal.js";
import Claim from "../models/Claim.js";

// User claims a deal
export const claimDeal = async (req, res) => {
  try {
    const { dealId } = req.params;

    // 1️⃣ Check if deal exists
    const deal = await Deal.findById(dealId);
    if (!deal) {
      return res.status(404).json({ message: "Deal not found" });
    }

    // 2️⃣ Prevent duplicate claim
    const alreadyClaimed = await Claim.findOne({
      user: req.user._id,
      deal: deal._id,
    });

    if (alreadyClaimed) {
      return res.status(400).json({
        message: "Deal already claimed",
      });
    }

    // 3️⃣ Check locked deal + verification
    if (deal.isLocked && !req.user.isVerified) {
      return res.status(403).json({
        message: "This deal requires verified account",
      });
    }

    // 4️⃣ Create claim
    const claim = await Claim.create({
      user: req.user._id,
      deal: deal._id,
    });

    // 5️⃣ Response
    res.status(201).json({
      message: "Deal claimed successfully",
      status: claim.status, // pending
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
