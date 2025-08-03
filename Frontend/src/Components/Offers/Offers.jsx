import React from 'react'
import exclusive_image from '../../Assets/exclusive_image.png'
import arrow_icon from '../../Assets/arrow.png'




const Offers = () => {
  return (
    <div className=' flex pl-[250px] pt-10 gap-[20px] items-center justify-between pr-[100px]  bg-gradient-to-b from-[#fde1ff] to-[#e1ffea22] to-[60%] mt-50 w-320  xl:w-378   lg:w-380 md:w-330 sm:w-330'>
            <div className='pb-20 m-5 '>
                <article>
                <p className='text-[100px]'>Exclusive <br></br> Offers for you</p>
            </article>

            <article>
            <p className='font-bold text-2xl  leading-[1.1]'>ONLY ON BEST SELLER PROJECTS</p>
            </article>
            
            
                <section className='flex items-center justify-center h-[70px] w-[310px] gap-[15px ] rounded-full mt-[30px] bg-[#ff4141] text-white siz-[22px] font-bold active:bg-blue-600 '>
                    Check it now
                    <img src={arrow_icon} className='pl-4' />
                </section>
            </div>
            <div>
                <section  className='h-[400px] w-[400px]'>
                <img  src={exclusive_image}/>
            </section>
            </div>
    
        </div>
  )
}

export default Offers