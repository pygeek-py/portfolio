import React, { useEffect } from 'react'
import AOS from 'aos'

const Project = () => {

    useEffect(() => {
        AOS.init({
          duration: 2000
        });
    }, [])

    const tos = () => {
        window.location = 'https://github.com/pygeek-py?tab=repositories'
    } 

    const read = () => {
        window.location = 'https://reader-pjxs.onrender.com/'
    }

    const eve = () => {
        window.location = 'https://event-hive-l6h9.onrender.com/'
    }

    const alp = () => {
        window.location = 'https://alphastate.netlify.app/'
    }

    const swap = () => {
        window.location = 'https://swapzx.netlify.app/'
    }

  return (
    <div id='project'>
        <div className='pro1'>
            <h1 className='pro2'>Projects <span className='pro2i'>.</span></h1>
            <div className='pro3'>
                <div className='pro4' data-aos="fade-down" data-aos-delay="300">
                    <h1 className='pro5'>Reader</h1>
                    <h1 className='pro6'>Reader is a website use for borrowing books, whch is made in React and DRF.</h1>
                    
                    <h1 className='pro7' onClick={read}>View project</h1>
                </div>

                <div className='pro4i' data-aos="fade-down" data-aos-delay="500">
                    <h1 className='pro5'>Event Hive</h1>
                    <h1 className='pro6'>Event Hive is a website use for Knowing the upcoming events, made using DRF and React</h1>
                    
                    <h1 className='pro7i' onClick={eve}>View project</h1>
                </div>

                <div className='pro4ii' data-aos="fade-down" data-aos-delay="700">
                    <h1 className='pro5'>Alpha state</h1>
                    <h1 className='pro6'>This is a landing page for a digital Real Estating, made with React.</h1>
                    
                    <h1 className='pro7ii' onClick={alp}>View project</h1>
                    <br />
                </div>

                <div className='pro4iii' data-aos="fade-down" data-aos-delay="900">
                    <h1 className='pro5'>Swapzx</h1>
                    <h1 className='pro6'>This is a site for crypto mining, In which this site was made using React.</h1>
                    
                    <h1 className='pro7iii' onClick={swap}>View project</h1>
                </div>
            </div>
            <h1 className='pro8' onClick={tos}>Repository on github</h1>
        </div>
    </div>
  )
}

export default Project