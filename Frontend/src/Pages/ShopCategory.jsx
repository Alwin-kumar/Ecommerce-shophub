import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../Assets/dropdown_icon.png'
import Item from '../Components/Item/Item'

const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext)
  return ( 
    <div>
        <img src={props.banner} className='block ml-30 w-[82%] mt-12'/>
        <div className='flex justify-between items-center mt-8 pl-20 pr-20 '>
          <p>
            <span className='font-bold'>Showing 1-12</span>out of 36 Products
          </p>
          <div className='px-[10px] py-[10px] rounded-3xl border-2 border-solid border-b-cyan-700  w-30 h-15'>
            sort by <img src={dropdown_icon} className=''/>
          </div>
        </div>
        <div className='mx-8 my-[100px] grid grid-cols-4 gap-x-[80px] w-[90%] h-[90%] gap-18 '>
          {all_product.map((item,i)=>{
            if(props.category===item.category){
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            }
            else{
              return null;
            }
          })}
        </div>
        <div className='flex justify-center items-center mx-[150px] my-auto w-[233px] h-[69px] rounded-[75px] bg-cyan-200 text-cyan-800 text-[18px] font-semibold mb-15 ml-150 '>
          Explore more
        </div>
    </div>
  )
}

export default ShopCategory