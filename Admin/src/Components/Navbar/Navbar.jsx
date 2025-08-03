import React from 'react'
import navlogo from '../../Assets/logo3.png'
import navprofile from '../../Assets/nav-profile.svg'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between px-16 py-2 shadow-xl shadow-gray-300 bg-white'> 
    <section className='flex items-center text-2xl font-serif'>
        <img src={navlogo} alt="" className='w-20 h-20  rounded-full '/>
        <p>SHOP HUB <br /><span className='text-xl font-bold font-sans text-emerald-700'>Admin Panel</span></p>
    </section>    
        <img src={navprofile} alt=""  className='w[75px]'/>

    </div>
  )
}

export default Navbar