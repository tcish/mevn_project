const mongoose = require("mongoose");
const validator = require("validator");

const crudSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A user must have a name!"],
  },

  email: {
    type: String,
    required: [true, "Please provide your email"],
    lowercase: true,
    validate: [validator.isEmail, "Please provide a valid email"],
  },

  address: {
    type: String,
    required: [true, "Please provide your address"],
  },

  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: [true, "User object id not given!"],
  },

  skill: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Skill",
      required: [true, "Skill object id not given!"],
    },
  ],
});

const Crud = mongoose.model("Crud", crudSchema);

module.exports = Crud;
