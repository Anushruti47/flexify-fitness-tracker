import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Mainarea } from './Components/Mainarea';

import { NavMenu } from '../Components/NavMenu';
import Hero from '../Components/Hero';
import Help from '../Components/Help';
import { Introduce } from '../Components/Introduce';
import { Boxarea } from '../Components/Boxarea';
import Intro from '../Components/Intro';
import Footer from '../Components/Footer';
// import { About } from './About';

export const Home = () => {
  return (
    <div>
    {/* <NavMenu></NavMenu> */}
    <Hero></Hero>
    <Help></Help>
    <Introduce></Introduce>
    <Boxarea></Boxarea>
    <Intro></Intro>
    <Footer></Footer>
   
    </div>
    
    
  )
}
