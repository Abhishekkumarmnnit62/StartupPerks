import Deal from "../models/Deal.js";

// GET all deals
export const getAllDeals = async (req, res) => {
  try {
    const deals = await Deal.find({});
    res.json(deals);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET single deal by ID
export const getDealById = async (req, res) => {
  try {
    const deal = await Deal.findById(req.params.id);

    if (!deal) {
      return res.status(404).json({ message: "Deal not found" });
    }

    res.json(deal);
  } catch (error) {
    res.status(400).json({ message: "Invalid deal ID" });
  }
};
