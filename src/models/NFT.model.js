const mongoose = require("mongoose");

const nftSchema = mongoose.Schema({
  "NFT ID": {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  Name: {
    type: String,
  },
  "Price (USD)": {
    type: Number,
  },
  Tier: {
    type: Number,
  },
  URL: {
    type: String,
  },
});

const NFT = mongoose.model("NFT", nftSchema);

module.exports = NFT;
