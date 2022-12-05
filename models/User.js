const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
    },
    address: {
      type: String,
    },
    job: {
      type: String,
    },
    job: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
    confirmPassword: {
      type: String,
      required: true,
    },
    emailVerified: {
      type: String,
      default: null,
    },
  },
  { timestamps: true }
);

//Export the model
module.exports = mongoose.model("User", UserSchema);
