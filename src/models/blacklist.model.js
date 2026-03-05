const mongoose = require("mongoose");

const blacklistTokenSchema = new mongoose.Schema(
  {
    token: {
      type: String,
      required: [true, "token is required"],
    },
    createdAt: {
      type: Date,
      default: Date.now,
      expires: "24h", // Document expires after 24 hours
    },
  },
  { timestamps: true },
);

const BlackListTokenModel = mongoose.model(
  "BlacklistTokens",
  blacklistTokenSchema,
);

module.exports = BlackListTokenModel;
