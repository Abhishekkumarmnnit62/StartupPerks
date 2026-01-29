import Deal from "../models/Deal.js";
import User from "../models/User.js";
// Admin adds a deal
export const createDeal = async (req, res) => {
  try {
    const {
      title,
      description,
      partnerName,
      category,
      isLocked,
      eligibility,
    } = req.body;

    const deal = await Deal.create({
      title,
      description,
      partnerName,
      category,
      isLocked,
      eligibility,
    });

    res.status(201).json(deal);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



export const verifyUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.isVerified = true;
    await user.save();

    res.json({ message: "User verified successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

