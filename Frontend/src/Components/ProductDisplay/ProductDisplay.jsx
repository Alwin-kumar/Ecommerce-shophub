import React, { useContext } from 'react'
import star_icon from '../../Assets/star_icon.png'
import star_dull_icon from '../../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
    const {product}= props;
    const {addToCart} = useContext(ShopContext)

  return (
    <div className='flex mx-0 my-14 xl:w-378 w-300   lg:w-380 md:w-330 sm:w-330'>
        <div className='flex gap-4  '>
            <section className='hidden flex-col gap-4  ml-10  md:block '>
                <img src={product.image} className='h-[138px] w-60  mb-4'/>
                <img src={product.image} className='h-[138px] w-60  mb-4'/>
                <img src={product.image} className='h-[138px] w-60  mb-4'/>
                <img src={product.image} className='h-[138px] w-60  mb-4'/>
                
            </section>
            <section>
                <img src={product.image} className='w-200 h-150 ml-10 '/>
            </section>
        </div>
        <div className='mx-0 my-[70px]  flex flex-col ml-20'>
            <p className='font-bold text-3xl text-cyan-900 '>{product.name}</p>
            <section className='flex items-center text-[16px] mt-3 gap-3 text-[#1c1c1c]'>
                <img src={star_icon}/>
                <img src={star_icon}/>
                <img src={star_icon}/>
                <img src={star_icon}/>
                <img src={star_dull_icon}/>
                <p>(122)</p>
            </section>
            
            <section className='flex font-bold  mx-10 my-0 text-2xl  '>
                <article className='text-[#818181] line-through '>
                    ${product.old_price}
                </article>
                <article className='text-cyan-600 ml-4'>
                    ${product.new_price}
                </article>
            </section>
            <section>
                A stylish and comfortable zipper shirt made for everyday wear. Features a front zipper closure, soft fabric, and a modern fit. Easy to wear and perfect for casual or semi-casual looks.
            </section>
            <section>
                <p className='font-bold text-2xl mt-[55px] text-cyan-700'>Select Size:</p>
                <section className='flex mx-10 my-8 gap-5'>
                <article className='px-[18px] py-2 bg-[#fbfbfb] border-[1px] border-[#ebebeb] cursor-pointer'>S</article>
                <article className='px-[18px] py-2 bg-[#fbfbfb] border-[1px] border-[#ebebeb] cursor-pointer'>M</article>
                <article className='px-[18px] py-2 bg-[#fbfbfb] border-[1px] border-[#ebebeb] cursor-pointer'>L</article>
                <article className='px-[18px] py-2 bg-[#fbfbfb] border-[1px] border-[#ebebeb] cursor-pointer'>XL</article>
                <article className='px-[18px] py-2 bg-[#fbfbfb] border-[1px] border-[#ebebeb] cursor-pointer'>XXL</article>
                </section>
            </section>
            <button  className='px-5 py-6  w-50  font-bold  text-white bg-[#FF4141] mb-10 boreder-none cursor-pointer ' onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
            <p className='mt-3'><span className='font-bold'>Category :</span>Women, T-shirt ,Croptop</p>
            <p className='mt-3'><span className='font-bold'>Tags :</span>Modern , Latest </p>
        </div>
    </div>
  )
}

export default ProductDisplay