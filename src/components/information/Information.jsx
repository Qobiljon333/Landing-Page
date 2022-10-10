import React from 'react'
import s from "./Information.module.css"
import ReactPlayer from 'react-player'
import book from "../../images/book2.jpg"
import img4 from "../../images/4.png"
import Button from '../../to use/btn/Button'
import video2 from "../../videos/2.mp4"
import image from "../../videos/img.jpg"
import img1 from "../../images/1.jpg";
import img2 from "../../images/5.jpg";
import img3 from "../../images/2.jpg";
import img4_4 from "../../images/6.jpg";
import img5 from "../../images/3.jpg";
import img6 from "../../images/7.jpg";
import img7 from "../../images/4.jpg";
import img8 from "../../images/8.jpg";
import Slider from "react-slick";
import ImgSlide from '../slider/ImgSlide'
const Information = () => {
  return (
    <div>
        <div className="book  w-full flex bg-yellow-50 flex-wrap">
          <div className="   w-full xl:w-1/2"><img className='w-[1281px]' src={book} alt="" /></div>
          <div id='4CR' className=" xl:p-16 pl-16  w-full xl:w-1/2">
            <p className='text-lg mt-5 xl:mt-[280px] 2xl:mt-[400px] opacity-60 font-medium'>4CR CATALOGUE 2022-2023</p>
            <h1 className='text-5xl xl:w-[500px] 2xl:w-[550px] mb-12 leading-[55px]  mt-7'>Discover the new edition of our catalog.</h1>
              <Button dataa={"Learn more"} />
          </div>
        </div>

        <div className="book w-full flex mt-8 xl:mt-[150px]  flex-wrap">
          <div className="   w-full xl:w-1/2 lg:pl-[75px] "><img className='' src={img4} alt="" /></div>
        
          <div className="  px-16 w-full xl:w-1/2">
            <p className='text-base tracking-[.2em]  opacity-60 font-medium'>OUR HISTORY</p>
            <h1 className='text-5xl xl:w-[500px] 2xl:w-[550px] mb-12 leading-[55px]  mt-5'>A climb to success thanks to you.</h1>
            <h1 className='text-2xl mb-7 xl:w-[480px] 2xl:w-[600px] leading-[35px]  mt-7'>There were 4 of us when we founded 4CR near Hamburg. Now 4CR is the loyal partner of thousands of painters in over 78 countries, but we always feel like a big family.
<br />
We were born in Germany and from our country we have learned precision, consistency, the pride of a job well done. With an ear to listen to feedback, to always improve. 4CR’s painting product range is the result of 18 years of work and also your contribution. Thank you and welcome at 4CR.
<br />

Let’s climb the summit together: where will we be tomorrow?</h1>
          </div>
        </div>
        <div className="w-full my-7">

         <iframe className='xl:w-[85%] xl:h-[1000px] block m-auto'  src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2F4CRcarrefinish%2Fvideos%2F2470544673040576%2F&show_text=0&width=560" width="90%" height="475"  scrolling="no" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
        </div>
        <div id="team">
          
        </div>
        <p className='opacity-60 lg:mt-[150px] w-[100px] block m-auto '>Team</p>
        <h1 className='text-[50px]  block  mb-12 text-center   mt-7 mx-auto '>Us. Professionalism, passion, humanity.</h1>

        <ImgSlide imgs={[img1,img2,img3,img4_4,img5,img6, img7,img8 ]} />
        {/* <div className={`${s.teamImage} overflow-x-auto w-full flex   h-[75vh]`}>
          <div className="h-[97%] overflow-hidden min-w-[410px] "> <img className='w-[100%] h-[100%] object-cover transition-all hover:-mt-[12%]   hover:w-[110%] hover:h-[110%]  ' src={img1} alt="" /></div>
          <div className="h-[97%] mx-12 overflow-hidden min-w-[750px] "> <img className='w-[100%] h-[100%] object-cover transition-all hover:-mt-[7%]   hover:w-[110%] hover:h-[110%]  ' src={img2} alt="" /></div>
          <div className="h-[97%] overflow-hidden min-w-[410px] "> <img className='w-[100%] h-[100%] object-cover transition-all hover:-mt-[12%]   hover:w-[110%] hover:h-[110%]  ' src={img3} alt="" /></div>
          <div className="h-[97%] mx-12 overflow-hidden min-w-[750px] "> <img className='w-[100%] h-[100%] object-cover transition-all hover:-mt-[7%]   hover:w-[110%] hover:h-[110%]  ' src={img4_4} alt="" /></div>
          <div className="h-[97%] overflow-hidden min-w-[410px] "> <img className='w-[100%] h-[100%] object-cover transition-all hover:-mt-[12%]   hover:w-[110%] hover:h-[110%]  ' src={img5} alt="" /></div>
          <div className="h-[97%] mx-12 overflow-hidden min-w-[750px] "> <img className='w-[100%] h-[100%] object-cover transition-all hover:-mt-[7%]   hover:w-[110%] hover:h-[110%]  ' src={img6} alt="" /></div>
          <div className="h-[97%] overflow-hidden min-w-[410px] "> <img className='w-[100%] h-[100%] object-cover transition-all hover:-mt-[12%]   hover:w-[120%] hover:h-[110%]  ' src={img7} alt="" /></div>
          <div className="h-[97%] mx-12 overflow-hidden min-w-[750px] "> <img className='w-[100%] h-[100%] object-cover transition-all hover:-mt-[7%]   hover:w-[110%] hover:h-[110%]  ' src={img8} alt="" /></div>

        </div> */}


    </div>
  )
}

export default Information