const mongoose = require("mongoose");
//USER Model

const User = mongoose.model("User", {
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1
  }
});

module.exports = User;
