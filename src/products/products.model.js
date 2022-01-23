const { number } = require("joi");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const productSchema=new Schema(
    {
      productId:{type:Number,required:true,unique:true},
      name: { type: String,required:true},
      stock:{type:String,required:true},
      category: {type: String,required:true},
      manufacturer:{type:String,required:true},
      price:{type:Number,required:true},
      discount:{type:Number,required:true},
      rating:{type:Number},
      reviews:
      { count:{type:Number},
        review:{type:String}
      },
      imageURL:{type:String,required:true},
      description:{type:String,required:true}
    }
  );
  const Products = mongoose.model("medpharmacyProduct", productSchema);
module.exports = Products;