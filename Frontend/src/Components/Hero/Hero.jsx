import React from 'react'
import arrow_icon from '../../Assets/arrow.png'
import hero_image from '../../Assets/hero_image.png'

const Hero = () => {
  return (
    <div className=' flex pl-[250px] pr-[100px] pt-10 gap-[20px] items-center justify-between  bg-gradient-to-b from-[#fde1ff] to-[#e1ffea22]
     to-[60%]  w-320  lg:px-2 lg:py-10  xl:w-378   lg:w-380 md:w-330 sm:w-330  xl:pl-[250px] xl:pr-[100px]  lg:pl-[250px] lg:pr-[100px]'>
        <div className='pb-20 m-5'>
        <article>
        <p className='font-bold text-2xl  leading-[1.1]'>NEW ARRIVALS ONLY</p>
        </article>
        <article>
            <p className='text-[100px]'>New collections <br></br> for everyone</p>
        </article>
        
            <section className='flex items-center justify-center h-[70px] w-[310px] gap-[15px ] rounded-full mt-[30px] bg-[#ff4141] text-white siz-[22px] font-bold active:bg-blue-600 '>
                Latest Collection
                <img src={arrow_icon} className='pl-4' />
            </section>
        </div>
        <div>
            <section  className='h-[400px] w-[400px]'>
            <img  src={hero_image}/>
        </section>
        </div>

    </div>
  )
}

export default Hero