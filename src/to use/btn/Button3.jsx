import React from 'react'
import s from "./Button.module.css"
import { BsArrowRight } from 'react-icons/bs'

const Button3 = ({dataa}) => {
  return (
    <div>
       
         <button className={s.btn3}>{dataa} <BsArrowRight/> </button>
    </div>
  )
}

export default Button3