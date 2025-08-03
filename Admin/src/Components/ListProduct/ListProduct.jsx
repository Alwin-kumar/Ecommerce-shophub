import React, { useEffect, useState } from 'react'
import crossicon from '../../Assets/cross_icon.png'

const ListProduct = () => {

  const [allproducts,setAllProduts] = useState([]);

  const fetchInfo = async() =>{
    await fetch('http://localhost:4000/allproducts')
    .then((res) =>res.json())
    .then((data)=>{setAllProduts(data)});  
  }

  useEffect(()=>{
    fetchInfo();
  },[])

  const remove_product = async(id) =>{
    await fetch('http://localhost:4000/removeproduct',{
      method:'POST',
      headers:{
        Accept:'application/JSON',
        'Content-Type': 'application/JSON',
      },
      body:JSON.stringify({id:id})
    })
    await fetchInfo();
  }
      

  return (
    <div className='flex flex-col items-center w-[100%]  px-2 py-12 mx-24  my-36 rounded-xl bg-white'>
        <p className='text-3xl font-bold'>All Product List</p>
        <div className='grid grid-cols-6 items-center gap-16 px-5 py-0 text-cyan-800 text-xl mb-8 mt-8 font-bold '>
          <p>Products</p>
          <p>Title</p>
          <p>Old Price</p>
          <p>New Price</p>
          <p>Category</p>
          <p>Remove</p>
        </div>
        <div>
          <hr />
          {allproducts.map((product,index)=>{
            return <div>
              <div key={index} className='grid grid-cols-6 items-center gap-16 px-5 py-0 mx-10 mb-8 mt-8 text-black text-[16px] font-semibold'>
                  <img src={product.image} alt="" className='h-30 w-25' />
                  <p>{product.name}</p>
                  <p>${product.old_price}</p>
                  <p>${product.new_price}</p>
                  <p>{product.category}</p>
                  <img src={crossicon} onClick={()=>{remove_product(product.id)}} alt="" className='cursor-pointer m-0' />
            </div>
            <hr />
            </div>
          })}
          
        </div>
    </div>
  )
}

export default ListProduct