const Admin = require("./admin.model");
exports.Login = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      const admin = await Admin.findOne({ email: email,password:password });
      console.log(admin);

      if (!admin) {
        return res.status(404).json({
          error: true,
          message: "Invalid Credentials",
        });
      }
      return res.send({
        success: true,
        message: "User logged in successfully",
      });
    } catch (err) {
      console.error("Login error", err);
      return res.status(500).json({
        error: true,
        message: "Couldn't login. Please try again later.",
      });
    }
  };