import rentalModel from "../models/rentalModel.js";

const addRental = async (req, res) => {

    try {
        const {fullName, email, phone, driverLicense, paymentMethod, totalPrice} = req.body;

        console.log("Data:", req.body);

        const rentalData = {
            fullName,
            email,
            phone,
            driverLicense,
            paymentMethod,
            totalPrice
        };

        console.log("Final Rental Data:", rentalData);
        
        const rental = new rentalModel(rentalData);
        await rental.save();

        res.json({ success: true, message: "Rent Added" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }

};

const listRentals = async (req, res) => {
    try {
        const rentals = await rentalModel.find({});
        res.json({ success: true, rentals });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

const removeRental = async (req, res) => {
    try {
        await rentalModel.findByIdAndDelete(req.body.id);
        res.json({ success: true, message: "Rent Removed" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

export { listRentals, addRental, removeRental};