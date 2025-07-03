import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import ProductItem from "./ProductItem";

const RelatedProducts = ({ currentProduct }) => {
  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (currentProduct) {
      // Filter products based on category and exclude the current product
      const filteredProducts = products
        .filter((item) => item.category.toLowerCase() === currentProduct.category.toLowerCase() && item._id !== currentProduct._id)
        .slice(0, 4); // Get 4 related products

      setRelated(filteredProducts);
    }
  }, [products, currentProduct]);

  const handleClick = (productId) => {
    navigate(`/product/${productId}`);
    window.scrollTo(0, 0);
  };

  if (!currentProduct) return null; // Prevent rendering if product is not loaded

  return (
    <div className="my-24">
      <div className="text-center text-3xl py-2">
        <Title text1="RELATED" text2="PRODUCTS" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
        {related.length > 0 ? (
          related.map((item) => (
            <div
              key={item._id}
              onClick={() => handleClick(item._id)}
              className="cursor-pointer"
            >
              <ProductItem id={item._id} name={item.name} price={item.price} image={item.image} />
            </div>
          ))
        ) : (
          <p className="text-center col-span-4 text-gray-500">No related products found.</p>
        )}
      </div>
    </div>
  );
};

export default RelatedProducts;
