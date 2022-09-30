import React from 'react'
import s from "./Button.module.css"
import { BsArrowRight } from 'react-icons/bs'

const Button = ({dataa}) => {
  return (
    <div>
       
         <button className={s.btn}>{dataa} <BsArrowRight/> </button>
    </div>
  )
}

export default Button