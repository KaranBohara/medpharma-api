const Admin = require("./admin.model");

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
        message: "Admin logged in successfully",
      });
    } catch (err) {
      console.error("Login error", err);
      return res.status(500).json({
       success: false,
        message: "Couldn't login. Please try again later.",
      });
    }
  };

  