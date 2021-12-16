const mongoose = require("mongoose");

const medpharmacyuser = new mongoose.Schema({
  Name: {
    type:String,
    required:true
  },
  Phonenumber:{ type:Number,
    required:true
  },
  Password:{type:String,
    required:true
  },
  confirmPassword:{
    type:String,
    required:true
  },
  date:{
    type:Date,
    default:Date.now}
});

module.exports = mongoose.model("medPharmacy", medpharmacyuser);