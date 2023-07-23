import React, { useEffect } from 'react'
import icon from '../icon.svg'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Header = () => {

  useEffect(() => {
    AOS.init({
      duration: 2000
    });
  }, [])

  const sip = () => {
    window.location = 'https://github.com/pygeek-py'
  }


  return (
    <div>
      <div className='big'>
        <div className='head'>
            <div className='heads'>
            <div className='headss' data-aos="fade-up">
              <h1 className='head1'>Hi, I am Malik,</h1>
              <h className="head1i">Frontend Developer</h>
              <p className='head2'>A mix of Design, Frontend Development and skill </p>
              <p className='head2i'>Professionaltaroduto in the market.</p>
              <button className='headb' onClick={sip}>Github</button>
            </div>
            <img src={icon} alt='' className='headi' data-aos="fade-down"/>
            </div>
        </div>
      </div>
      <div className='small'>
        <div className='head'>
          <div className='heads'>
            <div className='headss' data-aos="fade-up">
              <h1 className='head1'>Hi, I am Malik,</h1>
              <h className="head1i">Frontend Developer</h>
              <p className='head2'>A mix of Design, Frontend Development and skill Professionaltaroduto in the market. </p>
              <button className='headb' onClick={sip}>Github</button>
            </div>
            <img src={icon} alt='' className='headi' data-aos="fade-down"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header