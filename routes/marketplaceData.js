const express = require("express");
const { getNbrofMarketplaceData, getSortedMarketplaceData } = require("../controllers/marketplaceData");
const router = express.Router();

router.route("/").get(getSortedMarketplaceData).post(addMarketplaceData);
router.get("/nbrofdata",getNbrofMarketplaceData);

module.exports = router;