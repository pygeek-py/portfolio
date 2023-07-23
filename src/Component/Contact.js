import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fk3ct0i', 'template_2xvxzzn', form.current, 'XZ-Kp6j3DF1YmcbPE')
      .then((result) => {
          console.log(result.text);
          e.target.reset()
          alert('Message sent successfully ')
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div id='contact'>
        <div className='co1'>
            <h1 className='pro2'>Contact <span className='pro2i'>Me.</span></h1>
            <form ref={form} onSubmit={sendEmail}>
              <div className='co2'>
                  <input type='text' placeholder='Name' className='co3' name='user_name'/>
                  <input type='text' placeholder='Email' className='co3' name='user_email'/>
              </div>
              <textarea className='co4' placeholder='Message' name='message'></textarea>
              <center>
                  <button className='co5' type='submit'>Submit Now</button>
              </center>
            </form>
        </div>
    </div>
  )
}

export default Contact