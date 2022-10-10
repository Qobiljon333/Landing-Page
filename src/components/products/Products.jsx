import React, { useState } from 'react'
import { PRODUCTS } from '../../static/static'
import s from "./Products.module.css"
const Products = () => {
  const[state,setState] = useState("")
  return (
    <div id='our-products' className='w-full  bg-black p-16'>
        <h1 className='text-5xl text-white font-medium '>Our products</h1>
        <div className="flex flex-wrap mt-[110px]    w-full">
          {
              PRODUCTS.map(({name,svg,svg2},inx)=>(
                <div onMouseLeave={()=> setState("")} onMouseEnter={()=>setState(name)} className={` ${inx > 4 && inx < 9 ? "lg:border-r-2  lg:border-b-0":""} ${inx < 5 && inx < 4 ? "lg:border-b-2 lg:border-r-2":""} ${ inx === 4 ? "lg:border-b-2" :"" } ${inx == 9 ? "lg:border-b-0" :""} ${inx > 4 ? " lg:border-b-0  " :""} border-b-2 cursor-pointer  w:1/2 lg:w-1/5 text-white hover:bg-white   hover:text-black px-7 py-16 d  border-white border-solid `} key={inx}> 
                { state ==name ? svg2 :svg}
                <h1 className='lg:text-lg '>{name}</h1>
                </div>
              ))
            }
        </div>
    </div>
  )
}

export default Products