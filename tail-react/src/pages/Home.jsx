import React from 'react'
import Navbar from '../components/Navbar/Index'
import Hero from '../components/Hero/Index'
import Footer from '../components/Footer/Index'
import Contact from '../components/Contact/Index'

const Home = () => {
  return (
    <>
     <Navbar/>
    {/* <h1 className='text-3xl text-red-700 bg-slate-400 hover:bg-cyan-600'>Learning tailwind</h1> */}
    <Hero/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default Home
