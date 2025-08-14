import React, { useState } from 'react';
import upload_area from '../../Assets/upload_area.svg';

const AddProduct = () => {
  const [image, setImage] = useState(null);
  const [productDetails, setProductDetails] = useState({
    name: '',
    image: '',
    category: 'women',
    old_price: '',
    new_price: '',
  });

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };

  const changeHandler = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };

  const Add_Product = async () => {
    if (!image || !productDetails.name) {
      alert('Please provide product name and image');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('product', image);

      // upload to backend/cloudinary
      const uploadResp = await fetch(
        'https://ecommerce-shophub-backend-7k6v.onrender.com/upload',
        {
          method: 'POST',
          headers: { Accept: 'application/json' },
          body: formData,
        }
      );
      const uploadData = await uploadResp.json();

      if (uploadData.success) {
        const product = { ...productDetails, image: uploadData.image_url };

        // save product details
        const addResp = await fetch(
          'https://ecommerce-shophub-backend-7k6v.onrender.com/addproduct',
          {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(product),
          }
        );

        const addData = await addResp.json();

        if (addData.success) {
          alert('Product Added Successfully!');
          // reset form
          setProductDetails({
            name: '',
            image: '',
            category: 'women',
            old_price: '',
            new_price: '',
          });
          setImage(null);
        } else {
          alert('Failed to add product');
        }
      } else {
        alert('Image upload failed');
      }
    } catch (error) {
      console.error('Error adding product:', error);
      alert('Something went wrong!');
    }
  };

  return (
    <div className="box-border w-[100%] max-w-[800px] bg-white mx-5 my-8 px-8 py-12 rounded-xl t-10">
      <div>
        <section className="pt-5">
          <p className="w-[100%] text-[#7b7b7b] text-xl">Product Title</p>
          <input
            type="text"
            value={productDetails.name}
            onChange={changeHandler}
            name="name"
            placeholder="Type here"
            className="box-border w-[100%] h-14 rounded-xl pl-[15px] border-[#c3c3c3] border outline-none text-[14px]"
          />
        </section>
      </div>

      <div className="flex gap-15">
        <div className="w-85">
          <section className="pt-5">
            <p className="w-[100%] text-[#7b7b7b] text-xl">Price</p>
            <input
              type="text"
              value={productDetails.old_price}
              onChange={changeHandler}
              name="old_price"
              placeholder="Type here"
              className="box-border w-[100%] h-14 rounded-xl pl-[15px] border-[#c3c3c3] border outline-none text-[14px]"
            />
          </section>
        </div>

        <div className="w-85">
          <section className="pt-5">
            <p className="w-[100%] text-[#7b7b7b] text-xl">Offer Price</p>
            <input
              type="text"
              value={productDetails.new_price}
              onChange={changeHandler}
              name="new_price"
              placeholder="Type here"
              className="box-border w-[100%] h-14 rounded-xl pl-[15px] border-[#c3c3c3] border outline-none text-[14px]"
            />
          </section>
        </div>
      </div>

      <div className="pt-5 pb-5">
        <p className="w-[100%] text-[#7b7b7b] text-xl pb-5">Product Category</p>
        <select
          name="category"
          value={productDetails.category}
          onChange={changeHandler}
          className="p-2 w-[100px] h-12 text-xl text-[#7b7b7b] border border-solid border-b-cyan-600 rounded-xl"
        >
          <option value="women">Women</option>
          <option value="men">Men</option>
          <option value="kid">Kid</option>
        </select>
      </div>

      <div>
        <label htmlFor="file-input">
          <img
            src={image ? URL.createObjectURL(image) : upload_area}
            alt="upload preview"
            className="h-30 w-30 rounded-2xl object-contain my-0"
          />
        </label>
        <input
          type="file"
          onChange={imageHandler}
          name="image"
          id="file-input"
          hidden
        />
      </div>

      <button
        onClick={Add_Product}
        disabled={!image || !productDetails.name}
        className="text-white bg-blue-500 w-[210px] h-[70px] cursor-pointer rounded-full mt-5 disabled:opacity-50"
      >
        ADD
      </button>
    </div>
  );
};

export default AddProduct;
