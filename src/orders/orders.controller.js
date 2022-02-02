const Order=require('./orders.model');
// const Product=require('../products/products.model');
// const User=require('..//users/user.model');
var {nanoid} =require('nanoid');

exports.placeOrder = async (req, res) => {
    // const nanoid = customAlphabet('ABCDEF1234567890', 12);
    var orderid = nanoid();
    // const productid='61ee83d572042c7573cdfb9e';
    try{
       let orderData=
       {
           orderId:req.body.orderId,
           items:[
           {
            //    productId:'61ee83d572042c7573cdfb9e',
               quantity:req.body.items[0].quantity,
               subTotal:req.body.items[0].subTotal
           },
           {
            // productId:'61ee87ef72042c7573cdfba2',
            quantity:req.body.items[1].quantity,
            subTotal:req.body.items[1].subTotal
        }
        ],
        total:req.body.items[0].subTotal+req.body.items[1].subTotal
        // userId:'61f804d022a5ecb420efcc73'
       }
       console.log(orderData);
       const order=new Order(orderData)
       await order.save();
       return res.status(200).json({
         success: true,
         message: "Order Placed Successfully",
       });
    }
    catch(err)
    {
        return res.status(500).json({
            success: false,
            message: "Order not Placed",
          });
    }
}
exports.getOrderItems=async (req,res)=>
{
  try
  {const orders = await Order.find();
   res.send(orders);
  }
  catch(error)
  {
    return res.status(500).json(
      {
        succes:false,
        message:"Orders fetching failed",
      }
    )
  }
}