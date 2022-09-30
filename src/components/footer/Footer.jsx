import React from 'react'
import { FOOTER } from '../../static/static'
import d from "./Footer.module.css"
const Footer = () => {
  return (
    <div className='w-full min-h-[88vh] opacity-[.87] px-16 bg-black '>
      <h1 className='text-5xl pt-[110px] lg:pl-[100px] text-white'>4CR – Car Refinish</h1>
      <h1 className='text-5xl lg:pl-[100px] text-white'>German Quality</h1>

      <div className="flex flex-wrap justify-around pt-8 pb-16">
        {
          FOOTER.map(({name,info},inx)=>(
            <div className='p-16 ' key={inx}>
              <h1 className= 'pb-3  text-sm tracking-[.3em] font-normal text-white opacity-70'>{name}</h1>
              {
                info.map((text,inx)=>(
                  <p className='text-white leading-10 text-xl' key={inx}>{text}</p>
                ))
              }
            </div>
          ))
        }
      </div>
      <p className='text-base mt-8 text-white opacity-60 text-center'>© 2022 4CR - All Rights Reserved</p>
    </div>
  )
}

export default Footer