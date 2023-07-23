import React, { useState, useEffect } from 'react'
import css from '../css.svg'
import html from '../html.svg'
import javascript from '../javascript.svg'
import react from '../react.svg'
import { FaPython } from 'react-icons/fa'
import AOS from 'aos'

const Know = () => {

    useEffect(() => {
        AOS.init({
          duration: 2000
        });
      }, [])

    const[text, setText] = useState('*Click on the card to read*')

    const tex = () => {
        setText("HTML is a markup language, where we mark the elements to define what information the page will display.")
    }

    const texi = () => {
        setText("CSS is a stylesheet language composed of layers, created for the purpose of styling pages.")
    }

    const texii = () => {
        setText("JavaScript is a programming language that allows you to implement dynamic elements in web pages.")
    }

    const texis = () => {
        setText("Python is an interpreted, object-oriented, high-level programming language with dynamic semantics.")
    }

    const texs = () => {
        setText("React is a JavaScript library focused on creating user interfaces in a composite way.")
    }
    
  return (
    <div id="know">
        <div className='kn1'>
            <div className='kn2' data-aos="fade-up">
                <h1 className='kn3'>Knowledge <span className='kn3i'>.</span></h1>
                <h1 className='kn4'>{text}</h1>
            </div>
            <div className='kn5'>
                <div className='kn6' onMouseOver={tex} onClick={tex} data-aos="fade-down" data-aos-delay="100">
                    <img src={html} className='kns' alt='' />
                </div>
                <div className='kn6' onMouseOver={texi} data-aos="fade-down" data-aos-delay="500">
                    <img src={css} className='kns' alt='' />
                </div>
                <div className='kn6' onMouseOver={texii} data-aos="fade-down" data-aos-delay="1000">
                    <img src={javascript} className='kns' alt='' />
                </div>
                <div className='kn6' onMouseOver={texis} data-aos="fade-down" data-aos-delay="1300">
                    <h1 className='knss'><FaPython /></h1>
                </div>
                <div className='kn6' onMouseOver={texs} data-aos="fade-down" data-aos-delay="1700">
                    <img src={react} className='kns' alt='' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Know