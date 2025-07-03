import React, { useState } from 'react';
import { assets } from '../assets/assets';
import axios from 'axios';
import { backendUrl } from '../App';
import { toast } from 'react-toastify';

const Add = ({ token }) => {
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [model, setModel] = useState('');
  const [fueltype, setFuelType] = useState('');
  const [transmissiontype, setTransmissionType] = useState('');
  const [seatingcapacity, setSeatingCapacity ] = useState('');
  const [availability, setAvailability ] = useState('');
  const [insurance, setInsurance ] = useState('');
  const [category, setCategory] = useState('Sedan');
  const [subCategory, setSubCategory] = useState('Type-1');
  const [bestseller, setBestSeller] = useState(false);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      formData.append('name', name);
      formData.append('description', description);
      formData.append('price', price);
      formData.append('model', model);
      formData.append('fueltype', fueltype);
      formData.append('transmissiontype', transmissiontype);
      formData.append('seatingcapacity', seatingcapacity);
      formData.append('availability', availability);
      formData.append('insurance', insurance);
      formData.append('category', category);
      formData.append('subCategory', subCategory);
      formData.append("bestSeller", bestseller.toString());

      image1 && formData.append('image1', image1);
      image2 && formData.append('image2', image2);
      image3 && formData.append('image3', image3);
      image4 && formData.append('image4', image4);


      const response = await axios.post(
        backendUrl + '/api/product/add',
        formData,
        { headers: { token } }
      );

      console.log(response.data);

      if (response.data.success) {
        toast.success(response.data.message);
        setName('');
        setDescription('');
        setImage1(false);
        setImage2(false);
        setImage3(false);
        setImage4(false);
        setPrice('');
        setModel('');
        setFuelType('');
        setInsurance('');
        setAvailability('');
        setSeatingCapacity('');
        setTransmissionType('');
        setBestSeller(false);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col w-full items-start gap-3'>
      <div>
        <p className='mb-2'>Upload Image</p>
        <div className='flex gap-2'>
          {[1, 2, 3, 4].map((num) => (
            <label key={num} htmlFor={`image${num}`}>
              <img
                className='w-20'
                src={
                  !eval(`image${num}`)
                    ? assets.upload
                    : URL.createObjectURL(eval(`image${num}`))
                }
                alt=''
              />
              <input
                type='file'
                id={`image${num}`}
                hidden
                onChange={(e) => eval(`setImage${num}(e.target.files[0])`)}
              />
            </label>
          ))}
        </div>
      </div>

      <div className='w-full'>
        <p className='mb-2'>Product name</p>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          className='w-full max-w-[500px] px-3 py-2'
          type='text'
          placeholder='Type here'
          required
        />
      </div>

      <div className='w-full'>
        <p className='mb-2'>Product description</p>
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className='w-full max-w-[500px] px-3 py-2'
          placeholder='Write content here'
          required
        />
      </div>
      
      {!bestseller && (
        <>
      <div className='w-full'>
        <p className='mb-2'>Model</p>
        <input
          onChange={(e) => setModel(e.target.value)}
          value={model}
          className='w-full max-w-[500px] px-3 py-2'
          // type='text'
          placeholder='Type here'
          required
        />
      </div>

      <div className='w-full'>
        <p className='mb-2'>Fuel Type</p>
        <input
          onChange={(e) => setFuelType(e.target.value)}
          value={fueltype}
          className='w-full max-w-[500px] px-3 py-2'
          type='text'
          placeholder='Type here'
          required
        />
      </div>

      <div className='w-full'>
        <p className='mb-2'>Transmission Type</p>
        <input
          onChange={(e) => setTransmissionType(e.target.value)}
          value={transmissiontype}
          className='w-full max-w-[500px] px-3 py-2'
          type='text'
          placeholder='Type here'
          required
        />
      </div>

      <div className='w-full'>
        <p className='mb-2'>Seating Capacity</p>
        <input
          onChange={(e) => setSeatingCapacity(e.target.value)}
          value={seatingcapacity}
          className='w-full max-w-[500px] px-3 py-2'
          type='text'
          placeholder='Type here'
          required
        />
      </div>

      <div className='w-full'>
        <p className='mb-2'>Availability</p>
        <input
          onChange={(e) => setAvailability(e.target.value)}
          value={availability}
          className='w-full max-w-[500px] px-3 py-2'
          type='text'
          placeholder='Type here'
          required
        />
      </div>

      <div className='w-full'>
        <p className='mb-2'>Insurance</p>
        <input
          onChange={(e) => setInsurance(e.target.value)}
          value={insurance}
          className='w-full max-w-[500px] px-3 py-2'
          type='text'
          placeholder='Type here'
          required
        />
      </div>

      <div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8'>
        <div>
          <p className='mb-2'>Product Category</p>
          <select onChange={(e) => setCategory(e.target.value)} className='w-full px-3 py-2'>
            <option value='Sedan'>Sedan</option>
            <option value='SUV'>SUV</option>
            <option value='Sport Car'>Sport Car</option>
          </select>
        </div>

        <div>
          <p className='mb-2'>Sub Category</p>
          <select onChange={(e) => setSubCategory(e.target.value)} className='w-full px-3 py-2'>
            <option value='Type-1'>Type-1</option>
            <option value='Type-2'>Type-2</option>
            <option value='Type-3'>Type-3</option>
          </select>
        </div>
        </div>
        </>
)}

        <div>
          <p className='mb-2'>Product Price</p>
          <input
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            className='w-full px-3 py-2 sm:w-[120px]'
            type='number'
            placeholder='25'
            required
          />
        </div>

      <div className='flex gap-2 mt-2'>
        <input onChange={(e) => setBestSeller(e.target.checked)} checked={bestseller} type="checkbox" id="bestseller" />
        <label htmlFor="bestseller">Add to Bestseller</label>
      </div>

      <button type='submit' className='w-28 py-3 bg-black text-white'>
        ADD
      </button>
    </form>
  );
};

export default Add;
