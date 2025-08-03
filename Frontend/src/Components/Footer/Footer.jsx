import React from 'react'
import Instagram_logo from '../../Assets/Instagram_logo.png'
import facebook_logo from '../../Assets/facebook_logo.png'
import Whatsapp_logo from '../../Assets/Whatsapp_logo.png'
import Logo from '../../Assets/logo3.png'


const Footer = () => {
  return (
    <div className='bg-black  h-[400px] cursor-pointer p-8 w-320  xl:w-378   lg:w-380 md:w-330 sm:w-330 flex flex-col items-center justify-center'>
        <div className='flex items-center gap-10 justify-center'>
            
                <img src={Logo} alt="" className='h-[60px] w-16 rounded-full'/>
                <p className='text-white font-serif text-3xl font-bold'>SHOP HUB</p>
               </div>
    <div className=' '>
        <ul className='text-white flex justify-center  gap-8 p-8'>
            <li>Products</li>
            <li>Offices</li>
            <li>Company</li>
            <li>Contact</li>
            <li>About</li>
        </ul>
    </div>
    <div className='mx-4 gap-8 w-14  mt-4 h-14 cursor-pointer flex  justify-center  mb-8'>
            <img src={Instagram_logo}/>
            <img src={facebook_logo}/>
            <img src={Whatsapp_logo}/>
        </div>
        <div>
            <hr className='border-white m-6 flex justify-center '/>
            <p className='text-white '>Copyright @2025- All rights reserved </p>
        </div>
        </div>
  )
}

export default Footer 