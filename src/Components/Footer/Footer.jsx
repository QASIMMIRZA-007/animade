import React from 'react'
import style from './Footer.module.scss' 
import { Logo } from '../../assets'
function Footer() {
  return (
    <div className={style.footer}>
      <div className={style.container}>
        <div className={style.left}>
            <img src={Logo}/>
        </div>
        <div className={style.right}>
            <ul>
                <li>Home</li>
                <li>How it works</li>
                <li>Pricing</li>
            </ul>
        </div>
      </div>
      <hr/>
      <div className={style.subContainer}>

        <div className={style.subLeft}>
        Copyright 2023. All rights reserved by Animade
        </div>
        <div className={style.subRight}>
            <ul>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
