import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import ReactPlayer from 'react-player'
import s from "../../index.css"
import Button from '../../to use/btn/Button'
import mainVideo from "../../videos/facebook-video.mp4"
const Banner = () => {
  return (
    <div>
      <video className='w-full ' muted  autoPlay loop controlsList='nodownload'   type="video/mp4"> <source src={mainVideo} type="video/mp4"></source> </video>
      
      <p className='text-base tracking-[.2em] text-black opacity-60 font-medium mt-[155px] ml-16 '>OUR BUSINESS</p>
      <h1 className='text-7xl ml-16 xl:w-[955px] mt-7'>All from one hand. The rest is in yours.</h1>
      <p className='text-3xl mt-12 mb-12 xl:w-[1150px] text-black  font-normal  ml-16 '>Since 2004, 4CR has been the reference point for car refinishing in the world. Over 78 countries, more than 1600 products, the same philosophy: always be there with the right solution at the right time.</p> 
      <div className="ml-16 mb-16"><Button className="ml-16" dataa="Find out more" /></div>

      <div className="w-full flex flex-wrap bg-[#F9F6EE]  ">
              <div className="  xl:p-16  w-full xl:w-1/2"><img src="https://4cr.com/wp-content/uploads/2022/08/01-Il-nostro-Business.webp" alt="" /></div>
              <div className="p-3 pt-16 w-full xl:w-1/2">
            <p className='text-base tracking-[.2em]  text-black opacity-60 mt-5 font-medium   '>OUR Products</p>
            <h1 className='text-5xl xl:w-[500px] 2xl:w-[700px] leading-[55px]  mt-3'>Our range covers every car refinishing need.</h1>
            <h1 className='text-2xl mb-7  xl:w-[480px] 2xl:w-[600px] leading-[35px]  mt-7'>Primers and clearcoats for bodywork, putties, abrasives, masking products, polishes and workshop equipment… <br /><br />
                We offer more than products. We offer complete and integrable solutions, for an efficient and safe workflow. Together, we have optimized the painting, raising the quality bar. <br /><br />
                We call it Orange PROSystem, and it is our signature</h1>
                <Button dataa={"Our products"} />
              </div>
      </div>

     




    </div>
  )
}

export default Banner