import React, { useContext } from 'react';
import star_icon from '../../Assets/star_icon.png';
import star_dull_icon from '../../Assets/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = ({ product }) => {
  const { addToCart } = useContext(ShopContext);

  // fallback image if product.image is broken
  const getImageUrl = (imgPath) => {
  if (!imgPath) return '';
  return imgPath.startsWith('http')
    ? imgPath
    : `https://ecommerce-shophub-backend-7k6v.onrender.com/Images/${imgPath}`;
};


  if (!product) return <p className="text-center">Loading product...</p>;

  return (
    <div className='flex mx-0 my-14 xl:w-380 w-300   lg:w-380 md:w-330 sm:w-330'>
      {/* Side Images */}
      <div className='flex gap-4'>
        <section className='hidden flex-col gap-4  ml-10  md:block '>
          {[1, 2, 3, 4].map((_, i) => (
            <img
              key={i}
              src={getImageUrl(product.image)}
              alt={`product view ${i + 1}`}
              className='h-[138px] w-60  mb-4'
            />
          ))}
        </section>

        {/* Main Image */}
        <section >
          <img
            src={getImageUrl(product.image)}
            alt={product.name}
            className='w-200 h-150 ml-10 '
          />
        </section>
      </div>

      {/* Product Details */}
      <div className='flex flex-col ml-0 md:ml-20 mt-10 md:mt-[70px]'>
        <p className='font-bold text-3xl text-cyan-900'>{product.name}</p>

        {/* Rating */}
        <section className='flex items-center text-[16px] mt-3 gap-2 text-[#1c1c1c]'>
          {[...Array(4)].map((_, i) => (
            <img key={i} src={star_icon} alt='star' />
          ))}
          <img src={star_dull_icon} alt='dull star' />
          <p>(122)</p>
        </section>

        {/* Price */}
        <section className='flex font-bold mt-3 text-2xl'>
          <article className='text-[#818181] line-through'>
            ${product.old_price}
          </article>
          <article className='text-cyan-600 ml-4'>
            ${product.new_price}
          </article>
        </section>

        {/* Description */}
        <section className='mt-4'>
          A stylish and comfortable zipper shirt made for everyday wear.
          Features a front zipper closure, soft fabric, and a modern fit.
          Easy to wear and perfect for casual or semi-casual looks.
        </section>

        {/* Sizes */}
        <section className='mt-8'>
          <p className='font-bold text-2xl text-cyan-700'>Select Size:</p>
          <section className='flex gap-5 mt-4'>
            {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
              <article
                key={size}
                className='px-4 py-2 bg-[#fbfbfb] border border-[#ebebeb] cursor-pointer'
              >
                {size}
              </article>
            ))}
          </section>
        </section>

        {/* Add to Cart Button */}
        <button
          className='px-5 py-3 w-52 font-bold text-white bg-[#FF4141] mt-8 cursor-pointer'
          onClick={() => addToCart(product.id)}
        >
          ADD TO CART
        </button>

        {/* Category & Tags */}
        <p className='mt-5'>
          <span className='font-bold'>Category:</span> Women, T-shirt, Croptop
        </p>
        <p className='mt-2'>
          <span className='font-bold'>Tags:</span> Modern, Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;