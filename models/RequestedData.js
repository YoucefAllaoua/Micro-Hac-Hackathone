const mongoose = require('mongoose');

const RequestedDataSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please provide a title"],
    },
    desc: {
        type: String,
        required: [true, "Please provide a description"],
    }
})

module.exports = mongoose.model("RequestedData",RequestedDataSchema);