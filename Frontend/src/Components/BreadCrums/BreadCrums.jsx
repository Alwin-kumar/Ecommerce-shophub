import React from 'react'
import arrow_icon  from '../../Assets/breadcrum_arrow.png'

const BreadCrums = (props) => {
    const {product} = props;
  return (
    <div className='flex items-center gap-2 text-cyan-800 text-[16px] font-semibold  mx-15 my-[170px ] capitalize w-180'>
        Home <img src={arrow_icon}/> Shop <img src={arrow_icon}/> {product.category}  <img src={arrow_icon}/> {product.name}
    </div>
  )
}

export default BreadCrums