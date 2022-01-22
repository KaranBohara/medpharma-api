const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const adminSchema=new Schema(
    {
      email: { type: String},
      password: { type: String},
      name:{type:String},
      profilepic:{type:String},
      accesstoken:{type:String},
    }
  );
  const Admin = mongoose.model("medpharmacyadmin", adminSchema);
module.exports = Admin;