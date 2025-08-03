import React from 'react'
import {Link } from 'react-router-dom'
import addproduct from '../../Assets/Product_Cart.svg'
import listproduct from '../../Assets/Product_list_icon.svg'

const Sidebar = () => {
  return (
    <div className='flex flex-col pt-8 gap-5 w-[100%] max-w-[250px] h-[100vh] bg-white'>
        <Link to='/addproduct'>
        <div className='flex items-center justify-center mx-8 my-2 px-1 py-2 rounded-[6px] bg-[#f6f6f6] gap-8 cursor-pointer'>
            <img src={addproduct} alt="" />
            <p>Add Product</p>
        </div>
        </Link>
        <Link to='/listproduct'>
        <div className='flex items-center justify-center mx-8 my-2 px-1 py-2 rounded-[6px] bg-[#f6f6f6] gap-8 cursor-pointer'>
            <img src={listproduct} alt="" />
            <p>Product List</p>
        </div>
        </Link>
        
    </div>
  )
}

export default Sidebar