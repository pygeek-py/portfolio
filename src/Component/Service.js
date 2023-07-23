import React, { useEffect } from 'react'
import icon from '../icon.svg'
import dev from '../dev.svg'
import motion from '../motion.svg'
import AOS from 'aos'

const Service = () => {

  useEffect(() => {
    AOS.init({
      duration: 2000
    });
  }, [])

  return (
    <div id="service">
        <div className='se1'>
            <div className='se2'>
              <h1 className='pro2'>Service <span className='pro2i'>.</span></h1>
              <div className='se3'>
                <div className='se4' data-aos="fade-down">
                  <img src={icon} alt='pic' className='sei' />
                  <h1 className="se5">Web Development</h1>
                  <h1 className='se6'>I develop professional websites, blogs, portfolios, landing pages and e-commerce. </h1>
                </div>

                <div className='se4' data-aos="fade-down" data-aos-delay="300">
                  <img src={dev} alt='pic' className='sei' />
                  <h1 className="se5">Frontend Dev</h1>
                  <h1 className='se6'>Design interface so that it is clear, objective and Mostly intuitive for the user. </h1>
                  <br />
                  <br />
                </div>

                <div className='se4' data-aos="fade-down" data-aos-delay="500">
                  <img src={motion} alt='pic' className='sei' />
                  <h1 className="se5">Motion</h1>
                  <h1 className='se6'>I create interactions that convey a sense of modernity, in addition to get the user's attention. </h1>
                </div>
                
              </div>
            </div>
        </div>
    </div>
  )
}

export default Service