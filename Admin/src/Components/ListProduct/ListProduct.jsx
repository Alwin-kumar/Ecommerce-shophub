import React, { useEffect, useState } from 'react';
import crossicon from '../../Assets/cross_icon.png';

const ListProduct = () => {
  const [allProducts, setAllProducts] = useState([]);

  const fetchInfo = async () => {
    try {
      const res = await fetch('https://ecommerce-shophub-backend-7k6v.onrender.com/allproducts');
      const data = await res.json();
      setAllProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const remove_product = async (id) => {
    try {
      await fetch('https://ecommerce-shophub-backend-7k6v.onrender.com/removeproduct', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
      });
      fetchInfo();
    } catch (error) {
      console.error('Error removing product:', error);
    }
  };

  const getImageUrl = (image) =>
    image?.startsWith('http') ? image : `https://res.cloudinary.com/dozbs0vok/image/upload/${image}`;

  return (
    <div className="flex flex-col items-center w-[100%] px-2 py-12 mx-24 my-36 rounded-xl bg-white">
      <p className="text-3xl font-bold">All Product List</p>

      <div className="grid grid-cols-6 items-center gap-16 px-5 py-0 text-cyan-800 text-xl mb-8 mt-8 font-bold">
        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>

      <div>
        <hr />
        {allProducts.map((product, index) => (
          <div key={index}>
            <div className="grid grid-cols-6 items-center gap-16 px-5 py-0 mx-10 mb-8 mt-8 text-black text-[16px] font-semibold">
              <img src={getImageUrl(product.image)} alt={product.name} className="h-30 w-25" />
              <p>{product.name}</p>
              <p>${product.old_price}</p>
              <p>${product.new_price}</p>
              <p>{product.category}</p>
              <img
                src={crossicon}
                onClick={() => remove_product(product.id)}
                alt="remove"
                className="cursor-pointer m-0"
              />
            </div>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListProduct;
