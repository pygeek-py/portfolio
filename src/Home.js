import React from 'react'
import Navbar from './Component/Navbar'
import Header from './Component/Header'
import About from './Component/About'
import Project from './Component/Project'
import Service from './Component/Service'
import Know from './Component/Know'
import Contact from './Component/Contact'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Header />
        <About />
        <Project />
        <Service />
        <Know />
        <Contact />
    </div>
  )
}

export default Home