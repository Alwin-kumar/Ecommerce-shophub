import React from 'react'
import data_product from '../../Assets/data'
import Item from '../Item/Item'

const RelatedProduct = () => {
  return (
    <div className='flex flex-col items-center gap-3  md:ml-90 sm:ml-70 lg:ml-50   w-320  xl:w-300   lg:w-300  md:w-180 xl:h-[100vh] md:h-[180vh] sm:w-250'>
        <p className='text-[50px] text-[#171717] font-bold '>Related Products</p>
        <hr className='h-2 w-50 rounded-[10px] bg-[#252525]'/>
        <div className='mt-12 gap-12 justify-center grid grid-cols-2 4 xl:grid xl:grid-cols-4 lg:grid lg:grid-cols-4 md:grid md:grid-cols-2 sm:grid sm:grid-cols-2  '>
            {data_product.map ((item, i)=>{
                return <Item  key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
    </div>
  )
}

export default RelatedProduct