import React,{useState} from 'react'
import s from "./InformationHided.module.css"
import img_no_limit from "../../images/no-limits.png"
import { EXTRAINFO } from '../../static/static'
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai'

const InformationHided = () => {
  const [ extraInfo,setExtraInfo ] = useState("")
  const [state,setState ] = useState(false)

  return (
    <div id='Values' className={s.orange_bg} >
      <div className='w-full  xl:p-16 flex flex-wrap opacity-1  '>

      <div className="xl:w-1/2">
        <p className="text-base ml-16 font-normal">VALUES</p>
        <h1 className='text-[50px]  ml-16   mb-12 '>Everything from one hand, everything with our values.</h1>
        <p className='text-2xl ml-16 mr-16'>To become a complete supplier for car refinishing, we knew what to rely on. A philosophy of success told by our values and the color that represents us: 4CR orange.</p>
        <img className='m-16 xl:w-[135px]' src={img_no_limit} alt="" />
      </div>
      <div id='values' className="xl:w-1/2 ">
          {
            EXTRAINFO.map(({name,info},inx)=>(
              <div onClick={()=>{
                setExtraInfo(name)
                setState(j=>  extraInfo === name ? !j : j = true )
              } } 
              className='py-7 px-5 extraInfo border-t-2 border-black' key={inx}>
               <div className="flex"> <h1 className='text-4xl flex-1'>{name}</h1>
                {
                  state && extraInfo === name ? <AiOutlineMinusCircle onClick={()=> setState(j => !j)} className='text-3xl mr-5' /> : <AiOutlinePlusCircle  className='text-3xl mr-5'/>
                }</div>
                <div onClick={()=> setExtraInfo("")}  className={`info transitionn overflow-hidden ${state && extraInfo === name ? "h-[200px]" :"h-0"}`}>
                  <p className='text-[25px] mt-5'>{info}</p>
                </div>
              </div>
            ))
          }

      </div>
      </div>
    </div>
  )
}

export default InformationHided