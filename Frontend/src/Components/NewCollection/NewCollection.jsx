import React, { useEffect, useState } from 'react'

import Item from '../Item/Item'

const NewCollection = () => {

  const [new_collection,setNew_collection] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:4000/newcollections')
    .then((response)=>response.json())
    .then((data)=>setNew_collection(data));
  },[])

  return (
    <div className="flex flex-col items-center gap-4 pt-12 m-8 ml-50 w-250  xl:h-[60vh]  md:h-[130vh] sm:h-[100vh]   xl:w-280   lg:w-280  md:w-250 sm:w-250">
      <p className="text-amber-950 font-bold text-[60px]">NEW COLLECTION</p>
      <hr className="w-[200px] h-[6px] rounded-[10px] bg-amber-900" />

      <div className="grid grid-cols-2 gap-8 justify-center xl:grid-cols-4  lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 ">
        {new_collection.map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
};



export default NewCollection 