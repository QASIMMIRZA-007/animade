import React from 'react'
import style from './pricing.module.scss'
import { icon } from '../../assets'
import { BiUpArrowAlt } from "react-icons/bi";


function Pricing() {
  return (
    <div className={style.pricing}>
        <div className={style.pricingContainer}>
            <h1>
            No <span className='multiColor'>Hidden Fees</span> 
            </h1>
            <p>Free until you earn. Pay as you Scale.</p>
            <div className={style.cardContainer}>
                <div className={style.card}>
                    <div className={style.cardData}>
                    <img src={icon}/>
                    <h5>NFTs</h5>
                    <p>We handle NFT creation, collections and drops, putting the power of AI-created NFTs in your hands.
                        <br/> We take payments daily as a percentage of sales - so you pay us as you earn.</p>
                       
                    </div>
                    <div className={style.dFlex}>
                            <div className={style.box}>
                                <h5>3%</h5>
                                <p>Of Initial NFT Sale</p>
                            </div>
                            <div className={style.box}>
                                <h5>1%</h5>
                                <p>Of  Sale</p>
                            </div>
                        </div>
                </div>
                <div className={style.card}>
                    <div className={style.cardData}>
                    <img src={icon}/>
                    <h5>NFTs</h5>
                    <p>We handle NFT creation, collections and drops, putting the power of AI-created NFTs in your hands.
                        <br/> We take payments daily as a percentage of sales - so you pay us as you earn.</p>
                       
                    </div>
                    <div className={style.dFlex}>
                           
                            <div className={style.box}>
                                <h5>1%</h5>
                                <p>Of  Sale</p>
                            </div>
                        </div>
                </div>
            </div>
        </div>
        <div className={style.designContainer}>
            <div className={style.conData}>
                <h5>50 Free Monthly designs.</h5>
                <hr/>
                <div className={style.flex}>
                    <li>Scale</li>
                    <li><BiUpArrowAlt/></li>
                    <li>Anytime</li>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Pricing
