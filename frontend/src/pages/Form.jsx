import React, { useState } from "react";
import axios from 'axios';
import { backendUrl } from '../App';
import { toast } from 'react-toastify';
import { useLocation } from 'react-router-dom';


const Form = ({ token }) => {
  const location = useLocation();
  const totalPrice = location.state?.totalPrice || 0;
  const [fullname, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [driverlicense, setDriverLicense] = useState('');
  const [paymentmethod, setPaymentMethod] = useState('');



  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const rentalData = {
        fullName: fullname,
        email: email,
        phone: phone,
        driverLicense: driverlicense,
        paymentMethod: paymentmethod,
      };

      const response = await axios.post(
        backendUrl + '/api/rental/add',
        rentalData,
        { headers: { token } }
      );

      console.log(response.data);

      if (response.data.success) {
        toast.success(response.data.message);
        setFullName('');
        setEmail('');
        setPhone('');
        setDriverLicense('');
        setPaymentMethod('');

      } else {
        toast.error(response.data.message);
      }

    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }

  };


  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col gap-6 w-full max-w-xl mx-auto p-6 bg-white rounded-xl shadow-md">
      <div className="flex flex-col">
        <label className="mb-1 font-medium text-gray-700">Full Name</label>
        <input
          onChange={(e) => setFullName(e.target.value)}
          value={fullname}
          type="text"
          placeholder="Enter your full name"
          className="px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div className="flex flex-col">
        <label className="mb-1 font-medium text-gray-700">Email</label>
        <textarea
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          placeholder="Enter your email"
          className="px-4 py-2 border rounded-lg shadow-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div className="flex flex-col">
        <label className="mb-1 font-medium text-gray-700">Phone No</label>
        <input
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
          type="number"
          placeholder="Enter your phone number"
          className="px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div className="flex flex-col">
        <label className="mb-1 font-medium text-gray-700">Total Price</label>
        <input
          type="text"
          value={`$${totalPrice.toFixed(2)}`}
          readOnly
          className="px-4 py-2 border rounded-lg bg-gray-100 shadow-sm cursor-not-allowed"
        />
      </div>

      <div className="flex flex-col">
        <label className="mb-1 font-medium text-gray-700">Driver License</label>
        <input
          onChange={(e) => setDriverLicense(e.target.value)}
          value={driverlicense}
          type="text"
          placeholder="Enter driver license number"
          className="px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div className="flex flex-col">
        <label className="mb-1 font-medium text-gray-700">Payment Method</label>
        <input
          onChange={(e) => setPaymentMethod(e.target.value)}
          value={paymentmethod}
          type="text"
          placeholder="Enter Your Payment Method"
          className="px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all"
      >
        Add
      </button>
    </form>

    // <div className="max-w-xl mx-auto p-6 bg-white rounded shadow-md mt-10">
    //   <h2 className="text-2xl font-bold mb-4">Car Rental Form</h2>
    //   <form onSubmit={handleSubmit} className="space-y-4">
    //     <input
    //       type="text"
    //       name="fullName"
    //       placeholder="Full Name"
    //       value={formData.fullName}
    //       onChange={handleChange}
    //       className="w-full border p-2 rounded"
    //       required
    //     />
    //     <input
    //       type="email"
    //       name="email"
    //       placeholder="Email"
    //       value={formData.email}
    //       onChange={handleChange}
    //       className="w-full border p-2 rounded"
    //       required
    //     />
    //     <input
    //       type="tel"
    //       name="phone"
    //       placeholder="Phone Number"
    //       value={formData.phone}
    //       onChange={handleChange}
    //       className="w-full border p-2 rounded"
    //       required
    //     />
    //     <div className="flex gap-4">
    //       <input
    //         type="date"
    //         name="pickupDate"
    //         value={formData.pickupDate}
    //         onChange={handleChange}
    //         className="w-full border p-2 rounded"
    //         required
    //       />
    //       <input
    //         type="date"
    //         name="returnDate"
    //         value={formData.returnDate}
    //         onChange={handleChange}
    //         className="w-full border p-2 rounded"
    //         required
    //       />
    //     </div>
    //     <select
    //       name="category"
    //       value={formData.category}
    //       onChange={handleChange}
    //       className="w-full border p-2 rounded"
    //       required
    //     >
    //       <option value="">Select Category</option>
    //       <option value="suv">SUV</option>
    //       <option value="sedan">Sedan</option>
    //       <option value="hatchback">Hatchback</option>
    //     </select>
    //     <input
    //       type="text"
    //       name="carModel"
    //       placeholder="Car Model"
    //       value={formData.carModel}
    //       onChange={handleChange}
    //       className="w-full border p-2 rounded"
    //     />
    //     <textarea
    //       name="notes"
    //       placeholder="Additional Notes"
    //       value={formData.notes}
    //       onChange={handleChange}
    //       className="w-full border p-2 rounded"
    //       rows={3}
    //     />
    //     <button
    //       type="submit"
    //       className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
    //     >
    //       Submit Rental Request
    //     </button>
    //   </form>
    // </div>
  );
};


export default Form;
