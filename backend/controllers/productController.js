import { v2 as cloudinary } from "cloudinary";
import productModel from "../models/productModel.js";
import { model } from "mongoose";

// Add Product
const addProduct = async (req, res) => {
    try {
        const { name, description, model, fueltype, transmissiontype, seatingcapacity, availability, insurance,  price, category, subCategory, bestSeller } = req.body;

        console.log("Received Data:", req.body); // Debugging

        // Ensure `bestSeller` is always a boolean
        const isBestSeller = bestSeller === "true" || bestSeller === true ? true : false;

        const image1 = req.files?.image1?.[0];
        const image2 = req.files?.image2?.[0];
        const image3 = req.files?.image3?.[0];
        const image4 = req.files?.image4?.[0];

        const images = [image1, image2, image3, image4].filter((item) => item !== undefined);

        let imagesUrl = await Promise.all(
            images.map(async (item) => {
                let result = await cloudinary.uploader.upload(item.path, { resource_type: 'image' });
                return result.secure_url;
            })
        );

        const productData = {
            name,
            description,
            model,
            fueltype,
            transmissiontype,
            seatingcapacity,
            availability,
            insurance,
            category,
            price: Number(price),
            subCategory,
            bestSeller: isBestSeller, // Ensure boolean value is stored
            image: imagesUrl,
            date: Date.now()
        };

        console.log("Final Product Data:", productData); // Debugging

        const product = new productModel(productData);
        await product.save();

        res.json({ success: true, message: "Product Added" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

// List All Products
const listProducts = async (req, res) => {
    try {
        const products = await productModel.find({});
        res.json({ success: true, products });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

// Remove Product
const removeProduct = async (req, res) => {
    try {
        await productModel.findByIdAndDelete(req.body.id);
        res.json({ success: true, message: "Product Removed" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

// Get Single Product
const singleProduct = async (req, res) => {
    try {
        const { productId } = req.body;
        const product = await productModel.findById(productId);
        res.json({ success: true, product });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

export { listProducts, addProduct, removeProduct, singleProduct };
