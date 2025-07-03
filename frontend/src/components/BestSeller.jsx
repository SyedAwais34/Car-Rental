import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext'; // ✅ Correct Context Import
import Title from './Title';
import ProductItem from './ProductItem';
import { useNavigate } from 'react-router-dom';

const BestSeller = () => {
  const { products } = useContext(ShopContext); 
  const [bestSeller, setBestSeller] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const bestProduct = products.filter((item) => item.bestSeller === true);
    setBestSeller(bestProduct.slice(0, 4));
  }, [products]); 

  const handleClick = (productId) => {
    navigate(`/product/${productId}`);
    window.scrollTo(0, 0);
  };

  return (
    <div className='my-10 mb-[100px] px-4 sm:px-[4vw]'>
      <div className='text-center text-3xl py-8'>
        <Title text1={'CAR'} text2={'ITEMS'} />
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
          Browse our collection of car accessories and items for sale.
        </p>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 gap-y-6'>
      {bestSeller.length > 0 ? (
          bestSeller.map((item, index) => (
            <div 
              key={index} 
              onClick={() => handleClick(item._id)} 
              className="cursor-pointer"
            >
            <ProductItem id={item._id} image={item.image} name={item.name} price={item.price} />
          </div>
        ))) : (
          <p className="text-center text-gray-500">No best sellers available.</p>
        )}
      </div>
    </div>
  );
};

export default BestSeller;
