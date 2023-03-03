const express = require("express");
const { getNbrofMarketplaceData, getSortedMarketplaceData, addMarketplaceData } = require("../controllers/marketplaceData");
const router = express.Router();

router.route("/").get(getSortedMarketplaceData).post(addMarketplaceData);
router.get("/nbrofdata",getNbrofMarketplaceData);

module.exports = router;