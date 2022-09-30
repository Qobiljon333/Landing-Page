import React,{useState} from 'react'
import s from "./Navbar.module.css"
import {AiFillYoutube,AiOutlineInstagram} from "react-icons/ai"
import {FaLinkedinIn} from "react-icons/fa"
import {BsFacebook} from "react-icons/bs"
import logaDark from "../../images/logo-dark.png"
import { PRODUCTS } from '../../static/static'
import {NAVCATEGORYS} from "../../static/static"
import {RiArrowRightSFill} from "react-icons/ri"
import X from "../../images/exit.png"
const Navbar = () => {
    const[proState,setProState] = useState(false)
    const [menuHover,setMenuHover] = useState(false)
    const [menuClick,setMenuClick] = useState(false)
    const [menuClickLaptop,setMenuClickLaptop] = useState(false)
    console.log(menuClickLaptop);
  return (
    <div className={`w-full z-50 overflow-hidden`}>
        <div className="w-full bg-zinc-900 h-12 hidden px-16 items-center justify-between xl:flex">
            <div className=" flex ">
                <p className='text-white opacity-70 cursor-pointer hover:opacity-100 mr-8'>info@4cr.com</p>
                <p className='text-white opacity-70 cursor-pointer hover:opacity-100 mr-8'>+49 (0) 40 69 60 99 30</p>
                <p className='text-white opacity-70 cursor-pointer hover:opacity-100 mr-8'>Donnerstrasse 10 – Haus1, D-22763 Hamburg</p>

            </div>
            <div className=" flex ">
                <p className='text-white text-2xl  opacity-70 hover:opacity-100 mr-10'><AiFillYoutube/></p>
                <p className='text-white text-2xl opacity-70 hover:opacity-100 mr-10'><AiOutlineInstagram/></p>
                <p className='text-white text-2xl opacity-70 hover:opacity-100 mr-10'><BsFacebook/></p>
                <p className='text-white text-2xl opacity-70 hover:opacity-100 mr-10'><FaLinkedinIn/></p>
            </div>
        </div>


        <div className="w-full h-[5.5rem] flex  items-center  px-16 ">
            <img className=' w-[45px] cursor-pointer' src={logaDark} alt="" />
            <div className="flex-1"></div>
            <div className="categorys hidden xl:flex ">
              <div onMouseEnter={()=> setProState(true)} onMouseLeave={()=>setProState(false)} className="flex relative  hover:cursor-pointer items-center mr-10"> <h1 className='2xl:text-[21px] xl:text-[18px] inline'  >Products </h1> <RiArrowRightSFill className={`text-[23px]  transitionn ${proState ? "rotate-90":""}`} />
                    <div className={`modalka  z-50 w-96 h-[420px] py-7   bg-black lg:top-[107px] top:8 transitionn lg:left-[10%] left-[8%] fixed     hover:cursor-default ${proState? "block":"hidden"}`}>
                        {
                            PRODUCTS.map(({name},inx)=>(
                                <p key={inx} className='text-white opacity-70  ml-10 text-lg  mt-2 hover:cursor-pointer hover:opacity-100'>{name}</p>
                            ))
                        }
                    </div>
              </div>
                {
                    NAVCATEGORYS.map((name,inx)=>(
                        <h1 key={inx} className='2xl:text-[21px]  xl:text-[18px]  mr-10'>{name}</h1>
                    ))
                }
               
            </div>
                <div className="flex-1"></div>
            <select className='items-center border-2 px-4 flex  justify-center outline-none pr-4 mx-12 border-black border-solid p-2' name="language" id="">
                    <option value="English">Eng</option>
                    <option value="Italy">It</option>
                    <option value="Russian">Ru</option>
            </select>

               <div>
               <img onClick={()=>setMenuClick(false)} className={`w-11 hover:cursor-pointer ${menuClick? "block" : "hidden"} mt-5  transition-all hover:rotate-[34deg]`} src={X} alt="" />
               
               <div onClick={()=>setMenuClick(true)} onMouseEnter={()=> setMenuHover(true) } onMouseLeave={()=>setMenuHover(false)} className={`hover:cursor-pointer z-50 ${menuClick? "hidden" : "grid"}  menu xl:hidden    grid   grid-cols-1 gap-3 transition-all w-[65px] h-6 `}>
               <div className={`bg-black ${menuHover ? "ml-[0]":"ml-[25px]"} transition-all rounded  w-[45px] h-[1px]`}></div>
               <div className={`bg-black ${menuHover ? "ml-[25px]":"ml-[0px]"} transition-all  w-[45px] h-[1px]`}></div>
                <div className={`bg-black ${menuHover ? "ml-[0]":"ml-[25px]"} transitionn w-[45px] h-[1px]`}></div>
                
                </div> 

                <div className={`ModalCategory z-40 transition-all fixed top-[5.5rem] right-0 ${menuClick? "h-[550px ]  border-t-[2px]": "h-[0px] "} w-full overflow-hidden pl-14 border-solid border-gray-400 border-r-[2px]  bg-white`}>
                <div onMouseEnter={()=> setProState(true)} onMouseLeave={()=>setProState(false)} className="flex relative  hover:cursor-pointer items-center mr-10"> <h1 className='text-[21px]  inline'  >Products </h1> <RiArrowRightSFill className={`text-[30px]  transition-all ${proState ? "rotate-90":""}`} />
                        <div className={`modalka  w-96 h-96 bg-black top-8 transition-all left-[-100px] absolute hover:cursor-default ${proState? "block":"hidden"}`}>
                            {
                                PRODUCTS.map(({name},inx)=>(
                                    <h1 key={inx} className='text-white opacity-70 leading-normal  ml-10 text-xl mt-2 hover:cursor-pointer hover:opacity-100'>{name}</h1>
                                ))
                            }
                        </div>
                   </div>
                        {
                            NAVCATEGORYS.map((name,inx)=>(
                                <h1 key={inx} className='text-[21px]  mr-10'>{name}</h1>
                            ))
                        }
                      </div>




                <div onClick={()=>setMenuClickLaptop(true)} onMouseEnter={()=> setMenuHover(true) } onMouseLeave={()=>setMenuHover(false)} className="hover:cursor-pointer menu hidden xl:grid  grid-cols-1 gap-3 transition-all w-[65px] h-6 ">
               <div className={`bg-black ${menuHover ? "ml-[0]":"ml-[25px]"} transition-all rounded  w-[45px] h-[2px]`}></div>
               <div className={`bg-black ${menuHover ? "ml-[25px]":"ml-[0px]"} transition-all  w-[45px] h-[2px]`}></div>
                <div className={`bg-black ${menuHover ? "ml-[0]":"ml-[25px]"} transition-all w-[45px] h-[2px]`}></div>

                </div> 

                      <div className={`ModalLaptop  transition-all fixed top-0 ${menuClickLaptop? "right-0": "-right-[555px] "} w-[550px] pl-[70px] h-[100vh] bg-black`}>
                        <img onClick={()=>setMenuClickLaptop(false)} className='w-12 hover:cursor-pointer mt-7 ml-[380px] transition-all hover:rotate-[34deg]' src={X} alt="" />
                      <h1 className='text-lg mt-11 text-white'>4 C R</h1>
                      <h1 className='text-6xl mt-6 text-white'>Info</h1>
                      <p className='text-white w-[400px] text-2xl mt-4'> The reference point for car refinishing in the world. We offer complete and integrable solutions, for an efficient and safe workflow.
                                .</p>
                      <p className='text-white w-[400px] text-2xl mt-1'> Contact us and find out more.</p>

                      <p className='text-white opacity-60 w-[400px] text-2xl 2xl:mt-[420px] mt-[200px]'> CONTACT US</p>
                      <p className='text-white text-xl mt-1'> Donnerstrasse 10 – Haus 1, D-22763 Hamburg</p>
                      <p className='text-white text-xl mt-1'> +49 (0) 4069609930</p>
                      <p className='text-white text-xl mt-1'> info@4cr.com</p>
                      </div>
         </div>
           
        </div>
    </div>
  )
}

export default Navbar