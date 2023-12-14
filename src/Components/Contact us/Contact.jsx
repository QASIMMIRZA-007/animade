import React from 'react'
import style from './contact.module.scss'
function Contact() {
  return (
    <div className={style.contact}>
        <h1><span className='multiColor'>Contact</span> Us</h1>
        <p>Let us know what you think.</p>
      <div className={style.container}>
        <div className={style.flex}>
       <form>
        <label>
            <span className='text'>Full name</span>
            
            <input type='text' placeholder='Enter full name'/>
        </label>
        <label>
           Phone number
            <input type='number' placeholder='Enter phone number'/>
        </label>
        <label>
           email
            <input type='email'placeholder='Enter email address'/>
        </label>
        <label>
           how can i help you
            <input type='text' placeholder='Type your message'/>
        </label>
        <button>
            Send Message
        </button>
       </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
