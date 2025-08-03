import React, { useState } from 'react'
import upload_area from '../../Assets/upload_area.svg'

const AddProduct = () => {

    const [image,setImage] = useState(false);
    const [productDetails,setProductDetails] = useState({
        name:"",
        image:"",
        category:"women",
        old_price:"",
        new_price:"",
       
    })

    const imageHandler = (e) =>{
            setImage(e.target.files[0]);
    }
    const changeHandler = (e) =>{
        setProductDetails ({...productDetails,[e.target.name]:e.target.value})
    }
    const Add_Product = async ()=>{
        console.log(productDetails);
        let responseData;
        let product = productDetails;

        const formData = new FormData();
formData.append('product', image);


        await fetch('http://localhost:4000/upload', {
            method:'POST',
            headers:{
                Accept:'application/json',
            },
            body:formData,

        }).then((resp) => resp.json()).then((data) => {responseData=data});

        if(responseData.success){
                product.image = responseData.image_url;
                console.log(product);
                await fetch('http://localhost:4000/addproduct',{
                    method:'POST',
                    headers:{
                        Accept:'application/json',
                        'Content-Type':'application/json',
                    },
                    body:JSON.stringify(product),
                }).then((resp)=>resp.json()).then((data)=>{
                    data.success?alert("Product Added"):alert("Failed")
                })
        }
    }

  return (
    <div className='box-border w-[100%] max-w-[800px] bg-white mx-5 my-8 px-8 py-12 rounded-xl t-10'>
        <div>
            <section className='pt-5'>
            <p className='w-[100%] text-[#7b7b7b] text-xl '>Product Title </p>
            <input type="text" value={productDetails.name} onChange={changeHandler} name="name" id="" placeholder='  Type here' className='box-border w-[100%]  h-14 rounded-xl pl-[15x] border-[#c3c3c3] border outline-none text-[14px] '/>
            </section>
        </div>
        <div className='flex gap-15 '>
        <div className='w-85'>
            <section className='pt-5' >
                <p className='w-[100%] text-[#7b7b7b] text-xl '>Price</p>
                <input type="text" value={productDetails.old_price} onChange={changeHandler} name="old_price" id="" placeholder='  Type here' className='box-border w-[100%]  h-14 rounded-xl pl-[15x] border-[#c3c3c3] border outline-none text-[14px] '/>
            </section>
        </div>
        <div className='w-85'>
            <section className='pt-5'>
                <p  className='w-[100%] text-[#7b7b7b] text-xl '>Offer Price</p>
                <input type="text" value={productDetails.new_price} onChange={changeHandler} name="new_price" id="" placeholder='  Type Here' className='box-border w-[100%]  h-14 rounded-xl pl-[15x] border-[#c3c3c3] border outline-none text-[14px] '/>
            </section>
        </div>
        </div>
        <div className='pt-5 pb-5'>
            <p  className='w-[100%] text-[#7b7b7b] text-xl pb-5'>Product Category</p>
            <select name="category" value={productDetails.category} onChange={changeHandler} id="" className='p-2 w-[100px] h-12 text-xl text-[#7b7b7b] border border-solid border-b-cyan-600 rounde-xl  '>
                <option value="women">Women</option>
                <option value="men">Men</option>
                <option value="kid">Kid</option>
            </select>
        </div>
        <div>
            <label htmlFor="file-input">
                <img src={image ? URL.createObjectURL(image):upload_area} alt="" className='h-30 w-30 rounded-2xl object-contain  my-0 '/>
            </label>
            <input type="file" onChange={imageHandler}  name='image' id='file-input' hidden=""/>
        </div>
        <button onClick={()=>{Add_Product()}} className='text-white bg-blue-500 w-[210px] h-[70px] cursor-pointer rounded-full mt-5 '>ADD</button>
    </div>
  )
}

export default AddProduct