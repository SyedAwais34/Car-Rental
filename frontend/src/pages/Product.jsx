import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import RelatedProducts from '../components/RelatedProducts';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Product = () => {
  const { productId } = useParams();
  const { products, addToCart} = useContext(ShopContext);
  const [productsData, setProductsData] = useState(null);
  const [image, setImage] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [daysDifference, setDaysDifference] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [quantity, setQuantity] = useState(1);  // <-- Added state for quantity
  const navigate = useNavigate();

  const handleClick = (productId) => {
    navigate(`/product/${productId}`); 
    window.scrollTo(0, 0); 
  };
  

  useEffect(() => {
    const fetchProductData = () => {
      const product = products.find((item) => item._id === productId);
      if (product) {
        setProductsData(product);
        setImage(product.image[0]);
      }
    };
    fetchProductData();
  }, [productId, products]);

  useEffect(() => {
    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      const differenceInDays = (end - start) / (1000 * 60 * 60 * 24);

      if (differenceInDays > 0) {
        setDaysDifference(differenceInDays);
        setTotalPrice(differenceInDays * (productsData?.price || 0));
      } else {
        setDaysDifference(0);
        setTotalPrice(0);
      }
    } else {
      setDaysDifference(0);
      setTotalPrice(0);
    }
  }, [startDate, endDate, productsData]);

  const handleRentNowClick = () => {
    navigate('/form', { state: { totalPrice } });
  };

  const handleAddToCart = () => {
    if (quantity < 1) {
      toast.error('Please select a valid quantity.');
      return;
    }

    addToCart(productsData._id, quantity);

    toast.success(`${quantity} ${productsData.name} added to cart!`);
  };

  if (!productsData) return <div className="opacity-0"></div>;

  return (
    <div className="border-t-2 pt-10 px-4 sm:px-[10vw]" >
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* Product Images */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll sm:w-[18.7%] w-full">
            {productsData.image.map((item, index) => (
              <img
                key={index}
                src={item}
                onClick={() => setImage(item)}
                className="w-[24%] sm:w-full sm:mb-3 cursor-pointer"
                alt=""
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img className="w-full h-[97%]" src={image} alt="" />
          </div>
        </div>

        {/* Product Info */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productsData.name}</h1>
          <p className="text-lg text-gray-700">
            Price: <span className="font-semibold text-blue-600 mt-8">${productsData.price}</span>
          </p>
          <p className="mt-2 text-[18px] text-gray-500 md:w-4/5">{productsData.description}</p>

          {/* Date Selection */}
          {/* Show Start Date & End Date only if it's a Car Rental */}
          {!productsData.bestSeller && productsData.category.toLowerCase() !== "caritem" && (
            <div className="flex flex-col sm:flex-row gap-4 mt-3">
              <div className="mt-4">
                <label className="block text-gray-600 font-medium mb-2">Start Date:</label>
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full px-16 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                />
              </div>
              <div className="mt-4">
                <label className="block text-gray-600 font-medium mb-2">End Date:</label>
                <input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="w-full px-16 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                />
              </div>
            </div>
          )}


          {/* Rental Period and Total Price */}
          {!productsData.bestSeller && productsData.category.toLowerCase() !== "caritem" && (
            <>
              <div className="mt-3">
                <h3 className="text-xl font-semibold text-gray-800">
                  Rental Period: <span className="text-blue-600">{daysDifference > 0 ? `${daysDifference} days` : 'N/A'}</span>
                </h3>
              </div>
              <div className="mt-2">
                <h3 className="text-xl font-semibold text-gray-800">
                  Total Price: <span className="text-blue-600">${totalPrice > 0 ? totalPrice.toFixed(2) : 'N/A'}</span>
                </h3>
              </div>
            </>
          )}



          {/* Quantity Selection */}
          {/* {productsData.bestSeller && productsData.category.toLowerCase() !== "caritem" && (
            <div className="mt-4"> */}
              {/* {productsData.quantity.map((item,index)=>{
                
              })} */}
              {/* <label className="block text-gray-600 font-medium mb-2">Select Quantity:</label>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
                className="w-20 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div> */}
          {/* )} */}

          {/* Buttons */}
          {productsData.bestSeller && productsData.category.toLowerCase() !== "caritem" && (
            <button
              className="bg-blue-500 text-white px-8 py-3 text-sm w-fit mt-4 active:bg-gray-500"
              onClick={handleAddToCart}
            >
              Add To Cart
            </button>
          )}


            {!productsData.bestSeller && productsData.category.toLowerCase() !== "caritem" && (
            <button
              className="bg-blue-500 text-white px-8 py-3 text-sm w-fit mt-4 active:bg-gray-500"
              onClick={handleRentNowClick}
            >
              Rent Now
            </button>
          )}
        </div>
      </div>

      {!productsData.bestSeller && productsData.category.toLowerCase() !== "caritem" && (
        <>
      <h1 className='mt-8 text-3xl text-blue-500 font-semibold'>Description</h1>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-y-4 gap-x-8">
        <div>
          <h4 className='mt-8 text-lg font-semibold'>Model</h4>
          <h4 className='mt-8 text-lg font-semibold'>Fuel Type</h4>
          <h4 className='mt-8 text-lg font-semibold'>Transmission Type</h4>
          <h4 className='mt-8 text-lg font-semibold'>Seating Capacity</h4>
          <h4 className='mt-8 text-lg font-semibold'>Insurance</h4>
          <h4 className='mt-8 text-lg font-semibold'>Availability</h4>
        </div>
        <div>
          <h4 className='mt-8 text-lg' >{productsData.model}</h4>
          <h4 className='mt-8 text-lg' >{productsData.fueltype}</h4>
          <h4 className='mt-8 text-lg' >{productsData.transmissiontype}</h4>
          <h4 className='mt-8 text-lg' >{productsData.seatingcapacity}</h4>
          <h4 className='mt-8 text-lg' >{productsData.insurance}</h4>
          <h4 className='mt-8 text-lg' >{productsData.availability}</h4>
        </div>
       
      </div>
      </>
      )}

      

      {/* Related Products */}
      <RelatedProducts currentProduct={productsData} />
    </div>
  );
};

export default Product;
