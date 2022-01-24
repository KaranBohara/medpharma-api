const Admin = require("./admin.model");
const Product=require("../products/products.model");

exports.Login = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      const admin = await Admin.findOne({ email: email,password:password });
      if (!admin) {
        return res.status(404).json({
          success: false,
          message: "Invalid Credentials",
        });
      }
      return res.status(200).json({
        email:admin.email,
        name:admin.name,
        image:admin.profilepic,
        accesstoken:admin.accesstoken,
        success: true,
        message: "User logged in successfully",
      });
    } catch (err) {
      console.error("Login error", err);
      return res.status(500).json({
       success: false,
        message: "Couldn't login. Please try again later.",
      });
    }
  };

  exports.AddProduct = async (req, res) => {
    try {
       let productData={name:req.body.name,
       category:req.body.category,
       manufacturer:req.body.manufacturer,
       price:req.body.price,
       discount:req.body.discount,
       stock:req.body.stock,
       description:req.body.description,
       rating:0,
       reviews:{
        count:0,
        review:""
      },
       imageURL:req.body.imageURL,
    }
     const product=new Product(productData)
      await product.save();
      return res.status(200).json({
        success: true,
        message: "Product Added Successfully",
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Product not Added",
      });
    }
  };

  exports.getProduct=async (req,res)=>
  {
    const products = await Product.find();
     res.send(products);
  }