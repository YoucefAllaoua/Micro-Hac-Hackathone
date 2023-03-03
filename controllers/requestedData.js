const RequestedData = require('../models/requestedData');

const getNbrofRequestedData = async (req, res) => {
    const data = await RequestedData.find();
    res.status(200).json({ data: data.length });
}

const getAllRequestedData = async (req, res) => {
    const data = await RequestedData.find();
    res.status(200).json({ data: data });
}

module.exports = {
    getNbrofRequestedData,
    getAllRequestedData
}