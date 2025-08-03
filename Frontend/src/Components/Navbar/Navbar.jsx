import React, { useContext, useState } from 'react'
import Logo from '../../Assets/logo3.png'
import { FaShoppingCart } from "react-icons/fa";
import { Link, replace } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';




const Navbar = () => {
    const [menu,setMenu] = useState("shop");
    const {getTotalCartItems} = useContext(ShopContext);

  return (
    <nav className='flex justify-around p-[16px] w-320 shadow-2xl sticky top-0 bg-[#E195AB] px-2 py-12 text-[18px] h-[60px] lg:px-2 lg:py-10 xl:w-378   lg:w-380 md:w-330 sm:w-330 xl:h-[90px] lg:h-[90px]  '>
        <div className='flex items-center gap-10'>
        <img src={Logo} alt="" className='h-[60px] w-16 rounded-full xl:w-15'/>
       </div>
        
        <ul  className='flex list-none items-center gap-[50px]'>
            
            <li className='flex flex-col  items-center justify-center  gap-[3px]'onClick={()=>{setMenu("shop")}}><Link to='/'>Shop</Link> {menu==="shop"?<hr className='border-none w-[80%] h-[3px] rounder-[10px] bg-green-600'/>: <></>}</li>
            <li className='flex flex-col  items-center justify-center  gap-[3px]'onClick={()=>{setMenu("mens")}} ><Link to='/mens'>Men</Link> {menu==="mens"?<hr className='border-none w-[80%] h-[3px] rounder-[10px] bg-green-600'/>: <></>}</li>
            <li className='flex flex-col  items-center justify-center  gap-[3px]'onClick={()=>{setMenu("womens")}}><Link to='/womens'>Women </Link>{menu==="womens"?<hr className='border-none w-[80%] h-[3px] rounder-[10px] bg-green-600'/>: <></>}</li>
            <li className='flex flex-col  items-center justify-center  gap-[3px]'onClick={()=>{setMenu("kids")}}><Link to='/kids'>Kids </Link>{menu==="kids"?<hr className='border-none w-[80%] h-[3px] rounder-[10px] bg-green-600'/>: <></>}</li>
           
        </ul>
        <div className='flex items-center gap-[45px]'>
            {localStorage.getItem('auth-token')?<button onClick={()=>{localStorage.removeItem('auth-token');window.location,replace('/')}} className='w-[150px] h-[60px] outline-none border-2 border-solid border-amber-50 bg-blue-500 text-white font-bold rounded-[75px] active:bg-indigo-800 cursor-pointer'>
                Logout
            </button>:<Link to='/login'>
            <button className='w-[150px] h-[60px] outline-none border-2 border-solid border-amber-50 bg-blue-500 text-white font-bold rounded-[75px] active:bg-indigo-800 cursor-pointer'>
                Login
            </button>
            </Link>}
            
            <Link to='/cart'>
            <FaShoppingCart className='h-8 w-8  '/></Link>
            <div className='w-[22px] h-[22px] flex items-center justify-center mt-[-35px] ml-[-55px] rounded-[11px]  text-white'>
                {getTotalCartItems}</div>
            
            
        </div>
    </nav>
  )
}

export default Navbar 