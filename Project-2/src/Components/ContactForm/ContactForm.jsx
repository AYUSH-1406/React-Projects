import React, { useState } from 'react'
import styles from './ContactForm.module.css'
import Button from '../Button/Button'
import { MdMessage } from 'react-icons/md'
import {FaPhoneAlt} from 'react-icons/fa/'
import {HiMail} from 'react-icons/hi/'

const ContactForm = () => {
const [name,setName]=useState("POPS");
const [email,setEmail]=useState("dummy@dummy.com");
const [text,setText]=useState("Hello");

  const onSubmit=(e)=>{
    e.preventDefault();
    setName(e.target[0].value);
    setEmail(e.target[1].value);
    setText(e.target[2].value);
  }


  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
      <div className={styles.top_btn}>
        <Button text="VIA CHAT SUPPORT" icon={<MdMessage fontSize="24px"/>}/>
        <Button text="VIA CALL" icon={<FaPhoneAlt fontSize="24px"/>}/>
        </div>
        <Button isOutline={true} text="VIA EMAIL" icon={<HiMail fontSize="24px"/>}/>
        <form onSubmit={onSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name='name' />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" name='email' />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea name='text' rows={8}/>
          </div>
          <Button text="SUBMIT"/>
        </form>
      </div>
      <div className={styles.contactImage}>
        <img src="/images/contact.svg" alt="contact-img" />
      </div>
    </section>
  )
}

export default ContactForm
