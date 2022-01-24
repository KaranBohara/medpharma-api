const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var autoIncrement=require('mongoose-auto-increment');
var connection=mongoose.createConnection(process.env.DATABASE_ACCESS, {
  dbName: "medPharmacy",
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
autoIncrement.initialize(connection);

  const productSchema=new Schema(
    {
      name: { type: String,required:true},
      category: {type: String,required:true},
      manufacturer:{type:String,required:true},
      price:{type:Number,required:true},
      discount:{type:Number,required:true},
      description:{type:String,required:true},
      stock:{type:String,required:true},
      rating:{type:Number,required:false},
      reviews:
      { count:{type:Number,required:false},
        review:{type:String,required:false}
      },
      imageURL:{type:String,required:true},
    }
  );
  productSchema.plugin(autoIncrement.plugin,{model:'medpharmacyProduct',field:'productId',startAt:'1',incremantBy:'1'});
  const Products = mongoose.model("medpharmacyProduct", productSchema);
  module.exports = Products;