const express = require("express");
const { getNbrofRequestedData, getAllRequestedData} = require("../controllers/requestedData");
const router = express.Router();

router.get("/",getAllRequestedData);
router.get("/nbrofdata",getAllRequestedData);

module.exports = router;