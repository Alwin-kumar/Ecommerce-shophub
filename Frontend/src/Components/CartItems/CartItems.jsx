import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../../Assets/cart_cross_icon.png'

const CartItems = () => {
    const {getTotalAmount,all_product,cartItems,removeFromCart} = useContext(ShopContext);

    
  return (
    <div className='mx-24  my-44  w-240  xl:w-300   lg:w-280 md:w-260 sm:w-240'>
        <div className='grid grid-cols-6 items-center gap-16 px-5 py-0 text-cyan-800 text-xl mb-8 mt-8 font-bold '>
            <p>Product</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr className='h-1 bg-[#e2e2e2] border-0 '/>
       {all_product.map((e)=>{
        if (cartItems[e.id]>0)
        {
          return <div>
          <div className='grid grid-cols-6 items-center gap-16 px-5 py-0 mb-8 mt-8 text-black text-[16px] font-semibold'>
            <img src={e.image} alt="" className='h-25'/>
            <p>{e.name}</p>
            <p>${e.new_price}</p>
            <button className='w-[64px] h-12 border-2 border-solid  border-[#ebebeb] bg-white'> {cartItems[e.id]}</button>
            <p>{e.new_price*cartItems[e.id]}</p>
            <img src={remove_icon} alt="" onClick={()=>{removeFromCart(e.id)}}/>
        </div>
        <hr/>
      </div> 
        }
        return null;
       })}
       <div className='flex mx-[100px] my-0 flex-col m-10 '>
        <div className='flex flex-1 flex-col mr-[100px] gap-10 mt-8'>
          <p className='text-xl font-bold'> Cart Totals</p>
          <section>
            <div className='flex justify-between px-4 py-0 my-4'>
              <p>SubTotal</p>
              <p>${getTotalAmount()}</p>
            </div>

            <hr/>
            <div className='flex justify-between px-4 py-0 my-4'>
              <p>Shipping Free</p>
              <p>Free</p>
              
            </div>
            <hr/>
            <div className='flex justify-between px-4 py-0 my-4'>
              <p className='text-xl font-bold'>Total</p>
              <p className='text-xl font-bold'>${getTotalAmount()}</p>
              
            </div>
          </section>
          <button className='w-[262px] h-[58px] outline-none bg-[#ff5a5a] text-[#fff] text-[16px] font-bold cursor-pointer'>Proceed to Pay</button>
        </div>
        <section className=' flex-1 text-[16px] font-medium mt-15'>
           <p className='text-[#555]'>If you have a promo code.Enter it here</p>
           <div className='w-[504px] mt-4 pl-5 h-[58px]  bg-[#eaeaea] flex justify-between items-center'>
            <input type="text" placeholder='promo code' className='bg-transparent w-[330px] text-[16px] h-[50px] ' />
            <button className='w-[170px] h-[58px] text-[16px]  bg-red-500 text-white cursor-pointer'>Submit</button>
           </div>
        </section>
       </div>
    </div>
  )
}

export default CartItems