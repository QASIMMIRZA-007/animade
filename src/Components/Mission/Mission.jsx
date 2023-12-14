import React from 'react'
import style from './mission.module.scss'
import { img } from '../../assets'
function Mission() {
  return (
    <div className={style.mission}>
        <h1> Our <span className='multiColor'>Mission</span></h1>
        <div className={style.para} >Empowering artists and entrepreneurs to create a fairer, more accessible art world.</div>
        <div className={style.container}>
            <div className={style.left}>
                <h2>At our core</h2>
                <div className='p'>We are driven by the mission of empowering AI artists and entrepreneurs to interact with cutting-edge technology and drive sales through a simple, user-friendly monetization platform.</div>
<div className='p'> We believe that by leveraging the power of AI, we can democratize access to the world of digital art and enable a new generation of creators to realize their full potential.</div>

                  
                <div className='p'>Our platform is designed to simplify the process of creating and selling digital art, providing artists with the tools and resources they need to thrive in a rapidly-evolving digital landscape.</div> <div className='p'>We are committed to driving innovation and pushing the boundaries of what is possible in the world of AI-powered digital art, and we invite you to join us on this exciting journey!</div> 

            </div>
            <div className={style.right}>
             <img src={img}/>
            </div>
        </div>
      
    </div>
  )
}

export default Mission
