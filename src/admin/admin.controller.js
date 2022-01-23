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
      let product=new Product(req.body);
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