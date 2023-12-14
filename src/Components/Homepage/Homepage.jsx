import React from 'react'
import style from './home.module.scss'
import { CiPlay1 } from "react-icons/ci";
import { heroImg, homeImg } from '../../assets';
import { FaArrowRight } from "react-icons/fa6";


function Homepage() {
  return (
    <div className={style.container}>
        <div className={style.left}>
            <h1>Streamline AI Images to your <span className={style.multiColor}>E-Commerce</span>  & <span className={style.multiColor}>NFT Platforms</span>  </h1>
            <p>Our innovative platform seamlessly integrates state-of-the-art AI image generation to your NFT and print on demand channels. <br/>
            <br/>
             Harness the power of AI to generate high-quality images quickly and easily, configure your listing, and upload - all in one place!</p>
            <div className={style.btnFlex}>
                <button className={style.firstBtn}>Start Creating for Free <FaArrowRight/></button>
                <button className={style.secBtn} >
                   <CiPlay1/>
                   Watch Demo
                </button>
            </div>
        </div>
        <div className={style.right}>
            <img src={heroImg}/>
        </div>
      
    </div>
  )
}

export default Homepage
