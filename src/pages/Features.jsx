import React from 'react'
import Navber from './../components/Home/Navber';
import Fubanner from '../components/FeaturesCom/Fubanner'
import Fuwork from '../components/FeaturesCom/Fuwork'
import Fuclient from '../components/FeaturesCom/Fuclient'
import FuLast from './../components/FeaturesCom/FuLast';
import FooterCom from './../components/FooterCom';

const Features = () => {
  return (
    <div>
       
        <Fubanner/>
        <Fuwork/>
        <Fuclient/>
        <FuLast/>
        
       
    </div>
  )
}

export default Features