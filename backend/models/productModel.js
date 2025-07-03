import mongoose, { model } from "mongoose";

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: [String], required: true }, // Ensures array contains only strings (URLs)
    model: { type: String, required: function () { return !this.bestSeller; } },
    fueltype: { type: String, required: function () { return !this.bestSeller; } },
    transmissiontype: { type: String, required: function () { return !this.bestSeller; } },
    seatingcapacity: { type: String, required: function () { return !this.bestSeller; } },
    availability: { type: String, required: function () { return !this.bestSeller; } },
    insurance: { type: String, required: function () { return !this.bestSeller; } },
    category: { type: String, required: function () { return !this.bestSeller; } },
    subCategory: { type: String, required: function () { return !this.bestSeller; } },
    bestSeller: { type: Boolean }, // New field for car accessories
    date: { type: Date, required: true } // Changed to Date type with default value
});

const productModel = mongoose.models.product || mongoose.model("product", productSchema);

export default productModel;



// sizes: { type: Array, r equired: true },