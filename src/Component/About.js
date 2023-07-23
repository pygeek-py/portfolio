import React, { useEffect } from 'react'
import { FaGithub, FaInstagram, FaLaptop, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import AOS from 'aos'


const About = () => {

    useEffect(() => {
        AOS.init({
          duration: 2000
        });
      }, [])

    const sip = () => {
        window.location = 'https://github.com/pygeek-py'
    }

    const twi = () => {
        window.location = 'https://twitter.com/pygeek'
    }

    const wha = () => {
        window.location = 'https://wa.me/07038091317'
    }

    const ins = () => {
        window.location = ""
    }

    const same = () => {
        window.location = ""
    }

  return (
    <div id="about">
        <div className='ab1'>
            <div className='ab2'>
                <div className='ab3' data-aos="fade-up">
                    <button className='abb'>Alpha creator</button>
                </div>
                <div className='ab4'>
                    <h1 className='ab5' data-aos="fade-down">Who I am</h1>
                    <h1 className='ab6' data-aos="fade-down">Usman Malik</h1>
                    <h1 className='ab7' data-aos="fade-down">Frontend Developer & UI Designer</h1>
                    <h1 className='ab7i' data-aos="fade-down">My name is Usman Malik, or "pygeek" (that's how they call me now) I am the creator of Alpha, a playground on the internet. I am hoping to freelance as a Fullstack Developer. I develop modern and high quality interfaces, focused on performance, animations, responsiveness and SEO.</h1>
                    <div className='ab8'>
                        <div className='ab9' data-aos="fade-down">
                            <h1 className='abs' onClick={sip}><FaGithub /></h1>
                        </div>
                        <div className='ab9' data-aos="fade-down" data-aos-delay="300">
                            <h1 className='abs'><FaLinkedin /></h1>
                        </div>
                        <div className='ab9' data-aos="fade-down" data-aos-delay="500">
                            <h1 className='abs' onClick={twi}><FaTwitter /></h1>
                        </div>
                        <div className='ab9' data-aos="fade-down" data-aos-delay="700">
                            <h1 className='abs' onClick={wha}><FaWhatsapp /></h1>
                        </div>
                        <div className='ab9' data-aos="fade-down" data-aos-delay="900">
                            <h1 className='abs' onClick={same}><FaLaptop /></h1>
                        </div>
                        <div className='ab9' data-aos="fade-down" data-aos-delay="1100">
                            <h1 className='abs' onClick={ins}><FaInstagram /></h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About