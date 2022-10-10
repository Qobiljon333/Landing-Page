import React,{useState} from 'react'
import { COUNTRY } from '../../static/static'
import s from "./Countrys.module.css"
import {MdOutlineArrowRight } from "react-icons/md"
const Countrys = () => {
  const [letter,setLetter ] = useState("")
  const [state ,setState ] = useState(false)
  return (
    <div className='w-full min-h-[100vh] xl:p-16'>
      <div id='Distributors' className=" py-16 w-full ">
            <p className='text-sm tracking-[.3em]  pl-16 text-black opacity-60 font-medium   '>DISTRIBUTOR</p>
            <h1 className='text-5xl pl-16 py-4 pb-16'>Your local partner.</h1>
            <p className='text-2xl pl-16  xl:w-2/3'>Our dealer network is a guarantee of presence and kindness for automotive professionals. Discover our dealer closest to you.</p>
            <h1 className='text-5xl pl-16 pt-10'>Country</h1>
      </div>
      <div className=" flex flex-col pl-16 pb-16   flex-wrap lg:col-span-6 sm:h-[850px] 2xl:h-[50vh] ">
        {
          COUNTRY.map(({name,countrys},inx)=>(
            <div className=' hover:cursor-pointer' key={inx}>
              <div onClick={()=>{
                setLetter(name)
                setState(j=> letter === name ? !j : j = true)
              }
              } className={`flex my-2   items-center   h-[50px] `}><h1 className='text-2xl  mr-7'>{name}</h1> <MdOutlineArrowRight className={` ${state && letter === name ? "rotate-90":""} transitionn text-2xl`}/>  </div>
              <div className={`${state && letter === name? "h-auto": "h-0"} overflow-hidden`}>
                {
                  countrys.map((country,inx)=>(
                    <p key={inx}  className={`text-xl hover:cursor-pointer  transition-all ml-8 my-2 ${ letter === name? "scale-100 opacity-100": "scale-0 opacity-0"}`}>{country}</p>
                  ))
                }
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Countrys