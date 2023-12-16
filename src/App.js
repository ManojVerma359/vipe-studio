import React from 'react'
import Header from './Components/Header'
import Tell from './Components/Tell'
import Featured from './Components/Featured'
import Integer from './Components/Integer'
import LongTerm from './Components/LongTerm'
import Developments from './Components/Developments'
import Star from './Components/Star'
import Success from './Components/Success'
import Footer from './Components/Footer'
import WordPress from './Components/WordPress '
import BackToTop from './Components/BackToTop'
import PreLoder from './Components/PreLoder'


const App = () => {
  return (
    <div className='overflow-hidden'>
    <PreLoder/>
    <BackToTop/>
    <Header/>
    <Tell/>
    <Featured/>
    <Integer/>
    <WordPress/>
    <LongTerm/>
    <Developments/>
    <Star/>
    <Success/>
    <Footer/>
   
    </div>
  )
}

export default App