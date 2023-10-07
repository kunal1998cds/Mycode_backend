const mongoose = require("mongoose");
require("dotenv").config();
const url="mongodb+srv://kunalrinayat112:kunal@cluster0.5l6u4i5.mongodb.net/school_data?retryWrites=true&w=majority&appName=AtlasApp"
const connected = mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = { connected };