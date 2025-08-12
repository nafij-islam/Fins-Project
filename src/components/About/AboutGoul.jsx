import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PtagCom from "./../PtagCom";
import H3Com from "./../H3Com";
import Image from './../Image';
import GoulImg from '../../assets/aboutGoulimg.png'

const AboutGoul = () => {
  return (
    <section>
      <Container>
        <Row className="bg-[#F4F5F5] g-0">
          <Col lg={{ span: 5, offset: 1 }}>
            <div className="flex gap-[61px]"> 
              <div>
                <PtagCom className="font-poppins text-[16px] font-medium pb-[4px] m-0 pt-[80px]">
                  Who we are
                </PtagCom>
                <H3Com className="font-poppins text-[38px] font-semibold pb-[16px pt-[4px] m-0">
                  Goal focussed
                </H3Com>
                <PtagCom className="w-[453px] pb-[80px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </PtagCom>
              </div>
              <div>
                 <H3Com className="font-poppins text-[38px] font-semibold pb-[16px pt-[112px] m-0">
                 Continuous improvement
                </H3Com>
                <PtagCom className="w-[505px] pb-[80px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </PtagCom>
              </div>
            </div>
          </Col>
        </Row>
        <div>
            <Image className='w-full' src={GoulImg}/>
        </div>
      </Container>
    </section>
  );
};

export default AboutGoul;
