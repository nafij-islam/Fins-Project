import React from 'react'
import Navber from '../components/Home/Navber';
import HomeBanner from './../components/Home/HomeBanner';
import HomeWork from './../components/Home/HomeWork';
import HomeProject from '../components/Home/HomeProject'
import HomeDesignC from './../components/Home/HomeDesignC';
import HomeAcciord from '../components/Home/HomeAcciord'
import Homefrom from './../components/Home/Homefrom';
import HomeBLog from './../components/Home/HomeBLog';
import SliderPart from '../components/Home/SliderPart';

const Home = () => {
  return (
    <>
    
    <HomeBanner/>
    <HomeWork/>
    <HomeProject/>
    <HomeDesignC/>
    <SliderPart/>
    <HomeAcciord/>
    <Homefrom/>
    <HomeBLog/>
   

    </>
  )
}

export default Home