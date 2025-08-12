import React from 'react'
import { Container } from 'react-bootstrap';
import H3Com from './../H3Com';
import PtagCom from './../PtagCom';
import Image from './../Image';
import Rbimg from '../../assets/Rbimg.png'
import './read.css'
const ReadBBanner = () => {
  return (
    <section>
        <Container>
            <div className='items-center  flex flex-col '>
                <H3Com className='pt-[128px] text-center text-[48px] pb-[16px] font-poppins font-semibold w-[900px]'>A UX Case Study on Creating a Studious Environment for Students</H3Com>
                <PtagCom>Andrew Posted<span className='pb-[48px] inline-block text-black text-[18px] font-medium'> on 27th January 2021</span></PtagCom>
                <Image src={Rbimg}/>
            </div>

        </Container>
    </section>
  )
}

export default ReadBBanner