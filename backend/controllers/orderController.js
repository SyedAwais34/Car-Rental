import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

// Place order (COD)
const placeOrder = async (req, res) => {
  try {
    const { items, amount, address } = req.body;
    // const userId = req.user.id;
    const userId = req.body.userId;

    const orderData = {
      userId,
      items,
      address,
      amount,
      paymentMethod: 'COD',
      payment: false,
      status: 'Processing',
      date: Date.now()
    };

    const newOrder = new orderModel(orderData);
    await newOrder.save();

    await userModel.findByIdAndUpdate(userId, { cartData: {} });

    res.json({ success: true, message: "Order Placed" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const placeOrderStripe = async (req, res) => {
  res.json({ success: false, message: "Stripe integration coming soon." });
};

const placeOrderRazorpay = async (req, res) => {
  res.json({ success: false, message: "Razorpay integration coming soon." });
};

// Admin: Get all orders
const allOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({});
    res.json({ success: true, orders });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// User: Get their own orders
const userOrders = async (req, res) => {
    try {
        const { userId } = req.body; // ✅ Comes from middleware
        const orders = await orderModel.find({ userId });
        res.json({ success: true, orders }); // ✅ Fixed from req.json to res.json
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

// Admin: Update order status
const updateStatus = async (req, res) => {
  try {
    const { orderId, status } = req.body;
    await orderModel.findByIdAndUpdate(orderId, { status });
    res.json({ success: true, message: 'Status updated' });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export {
  placeOrder,
  placeOrderStripe,
  placeOrderRazorpay,
  allOrders,
  userOrders,
  updateStatus
};
