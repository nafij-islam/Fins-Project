import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import Image from "./../Image";
import Formimg from "../../assets/Formimgh.png";
import H3Com from "./../H3Com";
import PtagCom from "./../PtagCom";
import Button from "./../Button";

const Homefrom = () => {
  return (
    <section className="py-[128px]">
      <Container>
        <Row className="fromhmain g-0">
          <Col lg={6}>
            <div className="fromhoveranim">
              <Image src={Formimg} />
              <div className="py-[96px] pl-[96px] home-hover bg-[#1c1e537e] fromhovertext">
                <H3Com className="font-poppins hover-img-text text-white text-[54px] pb-[24px] font-semibold w-[480px] leading-[75px]">
                  Building stellar websites for early startups
                </H3Com>
                <PtagCom className="font-poppins hover-pera-text text-[16px] text-white font-medium w-[460px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                  ut enim.
                </PtagCom>
              </div>
            </div>
          </Col>

          <Col className="z-10" lg={6}>
            <div className="bg-[#1C1E53] pt-[96px] form-main pl-[96px] pr[96px]">
              <H3Com className="font-poppins text-[32px] pb-[16px] font-medium text-white">
                Send inquiry
              </H3Com>
              <PtagCom className="text-white form-pera font-manrope text-[16px] pb-[20px] font-medium leading-[28px] w-[400px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore.
              </PtagCom>

              <div className="w-[415px] form-part">
                <Form>
                  <input
                    className="py-[18px] mb-[16px] w-full bg-transparent border-1 text-[16px] rounded-[4px] font-poppins pl-[32px] border-[#ffffff3b]"
                    type="text"
                    placeholder="Your Name"
                  />
                  <input
                    className="py-[18px] mb-[16px] w-full bg-transparent border-1 text-[16px] rounded-[4px] font-poppins pl-[32px] border-[#ffffff3b]"
                    type="text"
                    placeholder="Email"
                
                  />
                  <input
                    className="py-[18px] mb-[39px] w-full bg-transparent border-1 text-[16px] rounded-[4px] font-poppins pl-[32px] border-[#ffffff3b]"
                    type="text"
                    placeholder="Paste your Figma design URL"
                  />
                  <div>
                    <Button className="bg-[#FCD980] form-btn mb-[28px] w-full py-[23px] text-[18px] font-semibold font-manrope rounded-[41px]">
                      Send an Inquiry
                    </Button>
                    <Button className=" text-[white] w-full pb-[48px]  text-[18px] font-semibold font-poppins">
                      Send an Inquiry
                    </Button>
                  </div>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Homefrom;
