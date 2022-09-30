import React from 'react'

import s from "./ProductLanding.module.css"
import img1 from "../../images/2.webp"
import phone from "../../images/phone.png"
import shampoo from "../../images/shampoo.jpg"
import Button from '../../to use/btn/Button'
import Button2 from '../../to use/btn/Button2'
import Button3 from '../../to use/btn/Button3'
import { AiFillInstagram, AiFillYoutube } from 'react-icons/ai'
import { FaFacebook } from 'react-icons/fa'
const ProductLanding = () => {
  return (
    <div>

      <div className="w-full  flex flex-wrap bg-[#F9F6EE] ">
              <div className="  xl:p-16  w-full xl:w-1/2"><img src={img1} alt="" /></div>
              <div className="p-3 pt-16 w-full xl:w-1/2">
            <p className='text-lg text-black opacity-60 font-medium   '>MY 4CR</p>
            <h1 className='text-5xl xl:w-[500px] 2xl:w-[700px] leading-[55px]  mt-7'>Training
            <br />
                  and application.</h1>
            <h1 className=' xl:text-[22px]  font-medium opacity-95 mb-12 xl:w-[480px] 2xl:w-[600px] leading-[35px]  mt-7'>4CR is always close to you, even in training. Online courses, live training, in-company workshops. documentation. We make our experience available to professionals who choose us through free and tailor-made training. Your collaborators will have the opportunity to make the most of all the potential offered by the products 4CR.
                  Learn, create, evolve your work.
                    We’re here to help you out.</h1>
                <div className="  flex flex-wrap"> 
                <Button2 dataa={"Showcase & Tutorial"} />
                <Button dataa={"FAQ"} />
                </div>
              </div>
      </div>

      <div className="w-full flex flex-wrap  lg:pb-16 ">
              
          <div className=" pl-3 xl:pl-16  pt-16 w-full xl:w-1/2">
            <p className='text-lg text-black opacity-60 font-medium   '>COMMUNICATION & MEDIA</p>
            <h1 className='text-5xl xl:w-[500px] 2xl:w-[700px] leading-[55px]  mt-7'>Our commitment: <br /> to tell a world.</h1>
          
            <h1 className=' xl:text-[21px]  font-normal  mb-12 xl:w-[480px] 2xl:w-[600px] leading-[35px]  mt-7'>Car Refinishing is a world full of challenges and leaves room for everyone’s talent. It is our commitment every day: to communicate it through the network. On our social channels we use experience and friendliness to inform about products, techniques and tricks to work better, bringing end consumers closer to the points of sale and guaranteeing them the best customer experience. Not only that: our social pages are spaces where we support our customers and resellers, like a big family.
               <br />
                The 4CR revolution is online. And it is open to all.</h1>
                <div className="flex  "> <AiFillYoutube className=' lg:scale-[4] m-4 lg:m-12' />  <AiFillInstagram className=' lg:scale-[4] m-4 lg:m-12' /> <FaFacebook className=' lg:scale-[4] m-4 lg:m-12' /></div>
                <h1 className=' xl:text-[21px]  font-normal  mb-12 xl:w-[480px] 2xl:w-[600px] leading-[35px]  mt-7'>Download the app to access the documentation of all our products.

                Point the camera at the product. In one click, you will know everything!</h1>
               <div className="flex flex-wrap lg:flex-nowrap"> 
                <Button2 dataa={"Download on App Store"} />
                <Button2 dataa={"Available on Google Play"} />
                </div>
           </div>
           <div className="  xl:p-16  w-full xl:w-1/2"><img src={phone} alt="" /></div>
      </div>

      <div className="w-full flex flex-wrap text-white bg-black">
              
          <div className="p-3 xl:p-16 pt-16 w-full xl:w-1/2">
            <p className='text-lg text-white opacity-80 font-medium   '>NETWORK</p>
            <h1 className='text-5xl xl:w-[500px] 2xl:w-[700px] leading-[55px]  mt-7'>Product suppliers? Better: we are a network.</h1>
          
            <h1 className=' xl:text-[22px]  font-normal   leading-[35px]  mt-7'>Distributors who have already chosen us know it well: joining 4CR means being part of a network that is growing every day and where relationships are our most important resource. <br />
                  Each 4CR branch is an innovation hub, as well as a point of reference where our specialized technicians are ready to welcome and help all automotive professionals. Here, the attention to the customer and the quality of our range are confirmed by experience, training and kindness. <br />
                  4CR is a dynamic, lively brand that invests and communicates. For this we are already known by your potential customers and we are respected for our values, as well as for the products. Become part of the 4CR world. Let’s get to know each other and shake hands.</h1>
                <div className="flex mt-16"> 
                <Button3 dataa={"Your contact person"} />
                </div>
           </div>
           <div className="  xl:p-16  w-full xl:w-1/2"><img src={shampoo} alt="" /></div>
      </div>



    </div>
  )
}

export default ProductLanding