import userModel from "../models/userModel.js";

// Add products to user cart
const addToCart = async (req, res) => {
    try {
        const { userId, itemId, size } = req.body;
        const userData = await userModel.findById(userId);
        let cartData = { ...userData.cartData };

        if (!cartData[itemId]) {
            cartData[itemId] = {};
        }
        cartData[itemId][size] = (cartData[itemId][size] || 0) + 1;

        await userModel.findByIdAndUpdate(userId, { cartData }, { new: true });
        res.json({ success: true, message: "Added To Cart" });

    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: error.message });
    }
};

// Update user cart quantity
const updateCart = async (req, res) => {
    try {
        const { userId, itemId, size, quantity } = req.body;
        const userData = await userModel.findById(userId);
        let cartData = { ...userData.cartData };

        if (cartData[itemId] && cartData[itemId][size]) {
            cartData[itemId][size] = quantity;

            if (quantity === 0) {
                delete cartData[itemId][size]; // Remove size variant
            }
            if (Object.keys(cartData[itemId]).length === 0) {
                delete cartData[itemId]; // Remove item if no sizes left
            }
        }

        await userModel.findByIdAndUpdate(userId, { cartData }, { new: true });
        res.json({ success: true, message: "Cart updated" });

    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: error.message });
    }
};

// Get user cart
const getUserCart = async (req, res) => {
    try {
        const { userId } = req.body;
        const userData = await userModel.findById(userId);
        res.json({ success: true, cartData: userData.cartData });

    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: error.message });
    }
};

// Delete cart item
const deleteCartItem = async (req, res) => {
    try {
        const { userId, itemId, size } = req.body;
        const userData = await userModel.findById(userId);
        let cartData = { ...userData.cartData };

        if (cartData[itemId]) {
            delete cartData[itemId][size]; // Remove size variant

            if (Object.keys(cartData[itemId]).length === 0) {
                delete cartData[itemId]; // Remove item if no sizes left
            }
        }

        await userModel.findByIdAndUpdate(userId, { cartData }, { new: true });
        res.json({ success: true, message: "Item removed from cart" });

    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: error.message });
    }
};

export { addToCart, updateCart, getUserCart, deleteCartItem };
