const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    displayName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["pitcher", "investor"], default: "pitcher" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);