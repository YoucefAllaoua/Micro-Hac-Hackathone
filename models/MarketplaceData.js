const mongoose = require("mongoose");
const MarketplaceDataSchema = new mongoose.Schema({
    title:{
        type: String,
        required: [true, "Please provide a title"]
    },
    desc: {
        type: String,
        required: [true, "Please provide a description"]
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true, "Please provide an owner"]
    },
    img: {
        type: String,
        required: [true, "Please provide an image"]
    }
})

module.exports = mongoose.model("MarketplaceData", MarketplaceDataSchema);