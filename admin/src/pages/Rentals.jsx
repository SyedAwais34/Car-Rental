import React, { useEffect, useState } from 'react';
import { backendUrl } from '../App'
import axios from 'axios'
import { toast } from 'react-toastify'


const Rentals = ({token}) => {
  const [rentals, setRentals] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + '/api/rental/list')
      if (response.data.success) {
        setRentals(response.data.rentals);
      }
      else {
        toast.error(response.data.message)
      }

    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
  }

  const removeRental = async (id) => {
      try {
        const response = await axios.post(backendUrl + '/api/rental/remove', { id }, { headers: { token } })
  
        if (response.data.success) {
          toast.success(response.data.message)
          await fetchList();
        }
        else {
          toast.error(response.data.message)
        }
  
      } catch (error) {
        console.log(error);
        toast.error(error.message)
      }
    }
  

  useEffect(() => {
    fetchList()
  }, [])

  return (
    <>
          <h1 className='mb-8 text-3xl text-center'>All Rentals List</h1>
    
          <div className='flex flex-col gap-2'>
    
            {/* --------------- List Table Title ------------------- */}
    
    
            <div className='hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm'>
              <b>Full Name</b>
              <b>Email</b>
              <b>Phone No</b>
              <b>Total Price</b>
              <b>Driver License</b>
              <b>Payment Method</b>
              <b className='text-center'>Action</b>
            </div>
    
            {/*------------------------- Product List ---------------------  */}
    
            {
              rentals.map((item, index) => (
                <div className='grid grid-cols-[1fr_3fr_1fr_1fr_1fr_1fr_1fr] md:gris-cols-[1fr_3fr_1fr_1fr_1fr_1fr_1fr] items-center gap-2 py-1 px-2 border text-sm' key={index}>
                  <p>{item.fullName}</p>
                  <p>{item.email}</p>
                  <p>{item.phone}</p>
                  <p>{item.totalPrice}</p>
                  <p>{item.driverLicense}</p>
                  <p>{item.paymentMethod}</p>
                  <p onClick={() => removeRental(item._id)} className='text-right md:text-center cursor-pointer text-lg'>X</p>
    
    
                </div>
              ))
            }
          </div>
        </>
  );
};

export default Rentals;
