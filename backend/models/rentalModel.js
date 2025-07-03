import mongoose from "mongoose";

const rentalSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  driverLicense: { type: String, required: true },
  paymentMethod: { type: String, required: true },
});

export default mongoose.model('rental', rentalSchema);






// sizes: { type: Array, required: true },
