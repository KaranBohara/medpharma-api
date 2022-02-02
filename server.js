const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
var cors = require('cors');
require("dotenv").config();
const PORT = 5000;

const authRoutes = require("./routes/users");
const authAdminRoutes=require("./routes/admin");
const authProductsRoutes=require('./routes/products');
const authOrderRoutes=require('./routes/orders');

 mongoose.connect(process.env.DATABASE_ACCESS, {
    dbName: "medPharmacy",
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connection Success.");
  })
  .catch((err) => {
    console.error("Mongo Connection Error", err);
  });

const app = express();
app.use(cors({origin:"*"}));

1
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/users", authRoutes);
app.use("/admin",authAdminRoutes);
app.use('/product',authProductsRoutes);
app.use('/orders',authOrderRoutes);
let port = process.env.PORT || 5000;
app.listen(port, () => console.log("Listening on port "+port));

