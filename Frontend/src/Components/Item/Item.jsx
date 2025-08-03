import React from 'react'
import { Link } from 'react-router-dom'

const Item = (props) => {
  return (
    <div className=' hover:scale-105 hover: transition-transform duration-600'>
      <Link to={`/product/${props.id}`} ><img src={props.image} className='hover:shadow-2xl' onClick={window.scrollTo(0,0)}/ ></Link>
      
      <p className='mt-[6px] mb-[6px] mx-0 '>{props.name}</p>
      <div className='flex gap-5'>
      <div className='text-cyan-900 text-[18px] font-bold'>
        ${props.new_price}
      </div>
      <div className='text-cyan-600 text-[18px] font-bold line-through'>
        ${props.old_price}
      </div>
      </div>
    </div>
  )
}

export default Item