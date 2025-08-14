import React from 'react'
import { Container } from 'react-bootstrap';
import H3Com from './../H3Com';
import AboutProCard from './AboutProCard';


const AboutProsses = () => {
  return (
    <section className='py-[128px]'>
        <Container>
            <div>
                <H3Com className='font-poppins text-[48px] font-semibold text-center'>The process we follow</H3Com>
            </div>
            <div className='flex justify-between flex-wrap pt-[48px]'>
                <AboutProCard heading="Planning" pera="Lorem ipsum dolor sit amet, consetetur sadipscing elitr."/>
                <AboutProCard heading="Conception" pera="Lorem ipsum dolor sit amet, consetetur sadipscing elitr."/>
                <AboutProCard heading="Design" pera="Lorem ipsum dolor sit amet, consetetur sadipscing elitr."/>
                <AboutProCard heading="Development" pera="Lorem ipsum dolor sit amet, consetetur sadipscing elitr."/>
            </div>

        </Container>
    </section>
  )
}

export default AboutProsses