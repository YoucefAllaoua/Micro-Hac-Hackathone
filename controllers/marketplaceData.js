const { BadRequest } = require('../errors/index');
const MarketPlaceData = require('../models/marketplaceData');

const getNbrofMarketplaceData = async (req, res) => {
    const data = await MarketPlaceData.find();
    return res.status(200).json({ data: data.length });
}

// const getAllMarketplaceData = async (req, res) => {
//     try {
//         const data = await MarketPlaceData.find();
//         res.status(200).json({ data: data });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// }

const getSortedMarketplaceData = async (req, res) => {
    const categories = ["Medical", "Agriculture", "Industry", "Environment", "Economics", "Other"];
    if (req.query.category && categories.contains(req.query.category)) {
        const data = await MarketPlaceData.find({ category: req.query.category });
    } else {
        throw new BadRequest("Invalid category");
    }
    return res.status(200).json({ data: data });
}

const addMarketplaceData = async (req, res) => {
    if(!title || !desc || !owner || !category) {
        throw new BadRequest("Please provide all required fields");
    }
    const data = await MarketPlaceData.create(req.body);
    return res.status(201).json({ data: data });
}

module.exports = {
    getNbrofMarketplaceData,
    getSortedMarketplaceData
}