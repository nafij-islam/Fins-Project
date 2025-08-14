import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./pricing.css";
import { BsFillCaretRightFill } from "react-icons/bs";

import H3Com from "./../H3Com";
import PtagCom from "./../PtagCom";
import PricingCardCom from "./../PricingCardCom";
import Button from "./../Button";

const PricingCard = () => {
  return (
    <section className="py-[128px]">
      <Container>

        <div className="text-center pb-[64px]">
          <H3Com className='text-[#282938] text-[48px] font-poppins font-semibold pb-[16px]'>Our Pricing Plans</H3Com>
          <PtagCom className='w-[570px] inline-block font-poppins'>When you’re ready to go beyond prototyping in Figma, Webflow is ready to help you bring your designs to life — without coding them.</PtagCom>
        </div>
        <Row>
          <Col lg={4}>
            <div className="card-main card-main1">
              <div className="card-inner"></div>
              <div className="card-text">
                <H3Com className="text-[38px] pb-[20px] text-color flex items-center gap-3 font-semibold font-poppins">
                  $399{" "}
                  <span className="text-[16px] text-[#2405F2] design-text hover:text-[white]">
                    Per Design
                  </span>
                </H3Com>
                <H3Com className="text-[#282938] pb-[8px] text-color text-[24px] font-poppins">
                  Website Page{" "}
                </H3Com>
                <PtagCom className="text-[#282938] w-[270px] pb-[50px] font-poppins font-medium  text-color">
                  When you’re ready to go beyond prototyping in Figma, Webflow’s
                  ready to help.
                </PtagCom>
                <ul className="gap-2 flex text-[#636363] list-text flex-col">
                        <li className="flex items-center gap-2">
                    {" "}
                    <BsFillCaretRightFill />
                    All limited links
                  </li>
                     <li className="flex items-center gap-2">
                    {" "}
                    <BsFillCaretRightFill />
                    Own analytics platform
                  </li>
                     <li className="flex items-center gap-2">
                    {" "}
                    <BsFillCaretRightFill />
                    Chat support
                  </li>
                     <li className="flex items-center gap-2">
                    {" "}
                    <BsFillCaretRightFill />
                    Optimize hashtags
                  </li>
                    <li className="flex items-center gap-2">
                    {" "}
                    <BsFillCaretRightFill />
                    Optimize hashtags
                  </li>
                  
                </ul>
              </div>
              <div className="flex justify-center  pt-[530px]">
                <Button className="text-white px-[48px] bg-[#282938] py-[16px] nav-btn  rounded-[41px] card-btn duration-300 ">
                  Get started
                </Button>
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className="card-main">
              <div className="card-inner"></div>
              <div className="card-text">
                <H3Com className="text-[38px] pb-[20px] text-color flex items-center gap-3 font-semibold font-poppins">
                  $399{" "}
                  <span className="text-[16px] text-[#FCD980] design-text hover:text-[white]">
                    Multi Design
                  </span>
                </H3Com>
                <H3Com className="text-[#282938] pb-[8px] text-color text-[24px] font-poppins">
                  Website Page{" "}
                </H3Com>
                <PtagCom className="text-[#282938] w-[270px] pb-[50px] font-poppins font-medium  text-color">
                  When you’re ready to go beyond prototyping in Figma, Webflow’s
                  ready to help.
                </PtagCom>
                <ul className="gap-2 flex text-[#636363] list-text flex-col">
                  <li className="flex items-center gap-2">
                    {" "}
                    <BsFillCaretRightFill />
                    All limited links
                  </li>
                     <li className="flex items-center gap-2">
                    {" "}
                    <BsFillCaretRightFill />
                    Own analytics platform
                  </li>
                     <li className="flex items-center gap-2">
                    {" "}
                    <BsFillCaretRightFill />
                    Chat support
                  </li>
                     <li className="flex items-center gap-2">
                    {" "}
                    <BsFillCaretRightFill />
                    Optimize hashtags
                  </li>
                     <li className="flex items-center gap-2">
                    {" "}
                    <BsFillCaretRightFill />
                    Unlimited users
                  </li>
                 
                 
                </ul>
              </div>
              <div className="flex justify-center  pt-[530px]">
                <Button className="text-white px-[48px] bg-[#282938] py-[16px] nav-btn  rounded-[41px] card-btn duration-300 ">
                  Get started
                </Button>
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className="card-main">
              <div className="card-inner"></div>
              <div className="card-text">
                <H3Com className="text-[38px] pb-[20px] text-color flex items-center gap-3 font-semibold font-poppins">
                  $499 +{" "}
                  <span className="text-[16px] text-[#2405F2] design-text hover:text-[white]">
                    Per Design
                  </span>
                </H3Com>
                <H3Com className="text-[#282938] pb-[8px] text-color text-[24px] font-poppins">
                  Website Page{" "}
                </H3Com>
                <PtagCom className="text-[#282938] w-[270px] pb-[30px] font-poppins font-medium  text-color">
                  When you’re ready to go beyond prototyping in Figma, Webflow’s
                  ready to help.
                </PtagCom>
                <ul className="gap-2 flex text-[#636363] list-text flex-col">
                     <li className="flex items-center gap-2">
                    {" "}
                    <BsFillCaretRightFill />
                    All limited links
                  </li>
                     <li className="flex items-center gap-2">
                    {" "}
                    <BsFillCaretRightFill />
                    Own analytics platform
                  </li>
                     <li className="flex items-center gap-2">
                    {" "}
                    <BsFillCaretRightFill />
                    Chat support
                  </li>
                     <li className="flex items-center gap-2">
                    {" "}
                    <BsFillCaretRightFill />
                    Optimize hashtags
                  </li>
                     <li className="flex items-center gap-2">
                    {" "}
                    <BsFillCaretRightFill />
                    Unlimited users
                  </li>
                   <li className="flex items-center gap-2">
                    {" "}
                    <BsFillCaretRightFill />
                    Assist and Help
                  </li>
                 
                </ul>
              </div>
              <div className="flex justify-center  pt-[530px]">
                <Button className="text-white px-[48px] bg-[#282938] py-[16px] nav-btn  rounded-[41px] card-btn duration-300 ">
                  Get started
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PricingCard;
