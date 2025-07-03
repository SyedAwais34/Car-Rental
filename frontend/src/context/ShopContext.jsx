import React, { createContext, useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const currency = '$';
    const delivery_fee = 10;
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});
    const [products, setProducts] = useState([]);
    const [token, setToken] = useState('');
    const navigate = useNavigate();


    const addToCart = (itemId, size) => {
        if (!size) {
            toast.error('Select Product Quantity');
            return;
        }

        setCartItems(prevCartItems => {
            const updatedCart = { ...prevCartItems };

            if (!updatedCart[itemId]) {
                updatedCart[itemId] = {};
            }

            if (!updatedCart[itemId][size]) {
                updatedCart[itemId][size] = 1;
            } else {
                updatedCart[itemId][size] += 1;
            }

            return updatedCart;
        });

    };

    const getUserCart = async (token) => {
        try {

            const response = await axios.post(backendUrl + '/api/cart/get', {}, { headers: { token } })

            if (response.data.success) {
                setCartItems(response.data.cartData)
            }

        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }
    }

    const getCartCount = () => {
        return Object.values(cartItems).reduce((total, sizes) => {
            return total + Object.values(sizes).reduce((sum, count) => sum + count, 0);
        }, 0);
    };

    const updateQuantity = async (itemId, size, quantity) => {
        let cartData = structuredClone(cartItems);

        if (quantity === 0) {
            delete cartData[itemId][size];  // Remove item from cart if quantity is 0

            if (Object.keys(cartData[itemId]).length === 0) {
                delete cartData[itemId]; // If no sizes left, remove item completely
            }
        } else {
            cartData[itemId][size] = quantity; // Update quantity
        }

        setCartItems(cartData); // Update frontend state

        if (token) {
            try {
                await axios.post(backendUrl + '/api/cart/update',
                    { itemId, size, quantity },
                    { headers: { token } }
                );
            } catch (error) {
                console.log(error);
                toast.error("Failed to update cart");
            }
        }
    };

    const deleteCartItem = async (itemId, size) => {
        let cartData = structuredClone(cartItems);
    
        if (cartData[itemId]) {
            delete cartData[itemId][size]; // Remove size variant
    
            if (Object.keys(cartData[itemId]).length === 0) {
                delete cartData[itemId]; // Remove item if no sizes left
            }
        }
    
        setCartItems(cartData); // Update frontend state
    
        if (token) {
            try {
                const response = await axios.post(backendUrl + "/api/cart/delete",
                    { userId: localStorage.getItem("userId"), itemId, size },
                    { headers: { token } }
                );
    
                if (response.data.success) {
                    toast.success("Item removed from cart");
                } else {
                    toast.error("Failed to remove item");
                }
            } catch (error) {
                console.log(error);
                toast.error("Failed to remove item");
            }
        }
    };
    


    const getCartAmount = () => {
        let totalAmount = 0;
        for (const items in cartItems) {
            let itemInfo = products.find((product) => product._id === items);
            for (const item in cartItems[items]) {
                try {
                    if (cartItems[items][item] > 0) {
                        totalAmount += itemInfo.price * cartItems[items][item];
                    }
                } catch (error) {
                    console.error("Error calculating cart amount:", error);
                }
            }
        }
        return totalAmount;
    };

    const getProductsData = async () => {
        try {
            const response = await axios.get(backendUrl + '/api/product/list');
            if (response.data.success) {
                setProducts(response.data.products);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.error(error);
            toast.error(error.message);
        }
    };

    useEffect(() => {
        getProductsData();
    }, []);

    useEffect(() => {
        if (!token && localStorage.getItem('token')) {
            setToken(localStorage.getItem('token'))
            getUserCart(localStorage.getItem('token'))
        }
    }, [])

    const value = {
        products, currency, delivery_fee,
        search, setSearch, showSearch, setShowSearch,
        cartItems, addToCart, backendUrl, navigate, getCartCount, updateQuantity, getCartAmount, setCartItems, setToken, token, deleteCartItem
    };

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
