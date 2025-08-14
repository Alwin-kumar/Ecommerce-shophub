import React, { useState, useEffect } from 'react';
import Item from '../Item/Item';

const Popular = () => {
  const [popularProducts, setPopularProducts] = useState([]);

  useEffect(() => {
    fetch('https://ecommerce-shophub-backend-7k6v.onrender.com/popularinwomen')
      .then((response) => response.json())
      .then((data) => setPopularProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className="flex flex-col items-center gap-2.5 pt-30 m-8 md:ml-90 sm:ml-70 lg:ml-50 w-320 xl:w-300 lg:w-300 md:w-180 xl:h-[100vh] md:h-[180vh] sm:w-250">
      <p className="text-amber-950 font-bold text-[60px]">POPULAR IN WOMEN</p>
      <hr className="w-[200px] h-[6px] rounded-[10px] bg-amber-900" />
      <div className="mt-12 gap-12 justify-center grid grid-cols-2 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2">
        {popularProducts.map((item, i) => {
          // use full URL if it starts with http, otherwise build Cloudinary URL
          const imageUrl = item.image?.startsWith('http')
            ? item.image
            : `https://res.cloudinary.com/dozbs0vok/image/upload/${item.image}`;

          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={imageUrl}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
