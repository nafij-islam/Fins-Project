import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PtagCom from "./../PtagCom";
import Button from "./../Button";
import Image from "./../Image";
import Homebanimg from "../../assets/Homebanimg.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const HomeBanner = () => {
  return (
    <section className="bg-[#1C1E53] banner-section py-[126px]">
      <Container>
        <Row>
          <Col lg={5}>
            <div>
              <h1 className="text-white banner-heading leading-[74px] w-[490px] font-poppins text-[54px] font-semibold">
                Building stellar websites for early startups
              </h1>
              <PtagCom className="text-[#ffffffbb] pb-[48px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </PtagCom>
              <div className="flex banner-btn-main items-center">
                <Button className="bg-[#FCD980] banner-btn1 font-manrope py-[20px] px-[48px] text-[18px] rounded-[41px] font-semibold">
                  View our work
                </Button>

                <NavLink className="no-underline" to="/Work">
                  <Button className="font-manrope banner-btn2 flex items-center gap-[10px] ml-[40px] text-[18px] text-white font-semibold">
                    View our work <FaArrowRightLong />
                  </Button>
                </NavLink>
              </div>
            </div>
          </Col>

          <Col lg={{ span: 6, offset: 1 }}>
          <div className="banner-img">

            <Image src={Homebanimg} />
          </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HomeBanner;
