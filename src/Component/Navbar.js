import React from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { HashLink as Link } from 'react-router-hash-link'

const Navbar = () => {

  const on = () => {
    let a = document.querySelector(".navs");
    a.style.display = "block";
    let b = document.querySelector(".navf");
    b.style.display = "none"
    let c = document.querySelector(".navfs");
    c.style.display = "block"
  }

  const off = () => {
    let a = document.querySelector(".navs");
    a.style.display = "none";
    let b = document.querySelector(".navf");
    b.style.display = "block"
    let c = document.querySelector(".navfs");
    c.style.display = "none"
  }

  return (
    <div>
      <div className="big">
        <div className='nav'>
            <div className='nav1'>
                <h1 className='navlogo'>ALP<span className='navlogoi'>H</span>A</h1>
                <div className='navflex'>
                    <Link to='#' className='navh' smooth>
                      <h1 className='navhi'>Beginning</h1>
                    </Link>
                    <Link to='#about' className='navh' smooth>
                      <h1 className='navhi'>Who I am</h1>
                    </Link>
                    <Link to='#project' className='navh' smooth>
                      <h1 className='navhi'>Projects</h1>
                    </Link>
                    <Link to='#service' className='navh' smooth>
                      <h1 className='navhi'>Services</h1>
                    </Link>
                    <Link to='#know' className='navh' smooth>
                      <h1 className='navhi'>Knowledge</h1>
                    </Link>
                    <Link to='#contact' className='navh' smooth>
                      <h1 className='navhi'>Contact me</h1>
                    </Link>
                </div>
            </div>
        </div>
      </div>

      <div className='small'>
        <div className='nav'>
          <div className='nav1'>
            <h1 className='navlogo'>ALP<span className='navlogoi'>H</span>A</h1>
            <h1 className='navf' onClick={on}><FaBars /></h1>
            <h1 className='navfs' onClick={off}><FaTimes /></h1>
          </div>
        </div>
        <div className='navs'>
          <div className='navflex'>
            <Link to='#' className='navh' smooth>
              <h1 className='navhi' onClick={off}>Beginning</h1>
            </Link>
            <Link to='#about' className='navh' smooth>
              <h1 className='navhi' onClick={off}>Who I am</h1>
            </Link>
            <Link to='#project' className='navh' smooth>
              <h1 className='navhi' onClick={off}>Projects</h1>
            </Link>
            <Link to='#service' className='navh' smooth>
              <h1 className='navhi' onClick={off}>Services</h1>
            </Link>
            <Link to='#know' className='navh' smooth>
              <h1 className='navhi' onClick={off}>Knowledge</h1>
            </Link>
            <Link to='#contact' className='navh' smooth>
              <h1 className='navhi' onClick={off}>Contact me</h1>
            </Link>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Navbar