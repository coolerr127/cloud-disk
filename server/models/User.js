const { Schema, model, ObjectId } = require("mongoose");

const User = new Schema({
  firstName: { type: String, require: true },
  email: { type: String, require: true, unique: true },
  password: { type: String, require: true },
  diskSpace: { type: Number, default: 1024 ** 3 },
  usedSpace: { type: Number, default: 0 },
  avatar: { type: String },
  files: [{ type: ObjectId, ref: "File" }],
});

module.exports = model("User", User);
