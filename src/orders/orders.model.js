const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const orderSchema = new Schema(
  {
    orderId: {
      type: String,
      unique: true,
      required: true,
    },
    items: [
      {
        // productId:
        // {
        //     type: mongoose.Schema.Types.ObjectId,
        //     ref: "medpharmacyproducts",
        // },
        quantity: {
          type: Number,
          required: true,
          min: [1, "Quantity can not be less then 1."],
        },
        subTotal: {
          type: Number,
          required: true,
        },
      },
    ],
    total: {
      type: Number,
      required: false,
    },
    //   userId:{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "users",
    // },
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
  }
);
module.exports = mongoose.model("medpharmacyorder", orderSchema);
