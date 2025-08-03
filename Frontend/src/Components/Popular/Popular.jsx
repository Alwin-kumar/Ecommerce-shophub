import React from 'react'

import Item from '../Item/Item'
import { useState } from 'react'
import { useEffect } from 'react';

const Popular = () => {


  const [popularProducts,setPopularProducts] = useState([]);

  useEffect(()=>{
      fetch('http://localhost:4000/popularinwomen')
      .then((response)=>response.json())
      .then((data)=>setPopularProducts(data));
    },[])

  return (
    <div className='flex flex-col items-center gap-2.5  pt-30 m-8  md:ml-90 sm:ml-70 lg:ml-50   w-320  xl:w-300   lg:w-300  md:w-180 xl:h-[100vh] md:h-[180vh] sm:w-250'>
      
        <p className='text-amber-950 font-bold text-[60px] '>POPULAR IN WOMEN</p>
        <hr className='w-[200px] h-[6px] rounded-[10px] bg-amber-900'/>
        <div className='mt-12 gap-12 justify-center grid grid-cols-2 4 xl:grid xl:grid-cols-4 lg:grid lg:grid-cols-4 md:grid md:grid-cols-2 sm:grid sm:grid-cols-2     '>
            {popularProducts.map ((item, i)=>{
                return <Item  key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
    </div>
  )
}

export default Popular