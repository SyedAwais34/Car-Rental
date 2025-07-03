import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'; 
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {

    const {products} = useContext(ShopContext)
    const [latestProducts, setLastestProducts] = useState([]);
    const navigate = useNavigate();


    useEffect(()=>{
      setLastestProducts(products.slice(0,4));
    },[products])

    const handleClick = (productId) => {
      navigate(`/product/${productId}`); 
      window.scrollTo(0, 0); 
    };
    

  return (
    <div className='my-10 px-4 sm:px-[4vw] ' >
      <div className='text-center py-8 text-3xl'>
        <Title text1={'LATEST'} text2={'COLLECTION'}/>
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-500'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil officiis maiores labore dicta ab similique deleniti adipisci nemo tenetur omnis
        </p>
      </div>
        {/* Rendering Products */}
        <div className='grid grid-cols-1 sm:grid-col-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
            {
                latestProducts.map((item, index)=>(
                  <div
                  key={index}
                  onClick={() => handleClick(item._id)} // Call handleClick when a product is clicked
                  className="cursor-pointer"
                >
                  <ProductItem
                    id={item._id}
                    name={item.name}
                    price={item.price}
                    image={item.image}
                  />
                </div>
                ))
            }
        </div>
    </div>
  )
}

export default LatestCollection;
