import React from 'react'

const Newsletter = () => {
  return (
    <div className='h-[40vh] flex flex-col mt-[200px] gap-[20px] justify-center items-center bg-black w-[320px] xl:w-[378px] lg:w-[380px] md:w-[330px] sm:w-[330px]'>
      <p className='text-white text-[55px] font-semibold'>
        Get Exclusive Offers On Your Email
      </p>
      <p className='text-white text-[20px]'>
        Subscribe to Our newsletter and stay updated
      </p>
      <div className='flex justify-between items-center bg-white w-[730px] rounded-[80px] border-[1px] border-solid border-b-blue-500'>
        <input
          type='email'
          placeholder='Your Email id'
          className='w-[500px] border-none ml-[30px] outline-none text-[16px] text-cyan-400'
        />
        <button className='text-white bg-red-500 w-[210px] h-[70px] cursor-pointer'>
          Subscribe
        </button>
      </div>
    </div>
  )
}

export default Newsletter
