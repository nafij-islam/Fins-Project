import React from 'react'
import { Container,Row,Col } from 'react-bootstrap';
import PtagCom from './../PtagCom';
import Button from './../Button';
import Fubannerimg from '../../assets/Fubanner.png'
import Image from './../Image';

const Fubanner = () => {
  return (
    <section className='py-[128px] bg-[#1C1E53]'>
        <Container>
            <Row>
                <Col lg={5}>
                   <div>
                    <h2 className='text-[54px] font-poppins font-semibold pb-[32px] text-white' >All the features you need</h2>
                    <PtagCom className='text-white pb-[32px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</PtagCom>
                    <Button className='text-black font-poppins text-[18px] font-semibold bg-[#FCD980] py-[16px] px-[44px] rounded-[41px]'>View Pricing</Button>
                   </div>
                
                </Col>
                <Col lg={{ span: 6, offset:1}}>
                <Image src={Fubannerimg}/>
                </Col>

            </Row>

        </Container>
    </section>
  )
}

export default Fubanner
