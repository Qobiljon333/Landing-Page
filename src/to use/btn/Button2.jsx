import React from 'react'
import s from "./Button.module.css"
import { BsArrowRight } from 'react-icons/bs'

const Button2 = ({dataa}) => {
  return (
    <div>
       
         <button className={s.btn2}>{dataa} <BsArrowRight/> </button>
    </div>
  )
}

export default Button2