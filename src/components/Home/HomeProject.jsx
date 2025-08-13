import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import H3Com from "../H3Com";
import Button from "../Button";
import { FaArrowRightLong } from "react-icons/fa6";
import Hoverimg1 from "../../assets/Hoverimg1.png";
import Hoverimg2 from "../../assets/Hoverimg2.png";
import Hoverimg3 from "../../assets/Hoverimg3.png";
import Image from "./../Image";
import PtagCom from "./../PtagCom";

const HomeProject = () => {
  return (
    <section className="py-[128px] project-section">
      <Container>
        <div className="flex project-heading-main justify-between">
          <H3Com className="text-[48px] project-heading font-poppins font-semibold pb-[64px]">
            View our projects
          </H3Com>
          <Button className="flex gap-[7px] items-center">
            View More <FaArrowRightLong />{" "}
          </Button>
        </div>

        <Row>
          <Col lg={8}>
            <div className="hovermain">
              <Image src={Hoverimg1} />
              <div className="bg-gradient-to-br from-[#1c1e5334] to-[#1c1e53] hoverimg">
                <H3Com className="text-[white] pb-[16px] font-poppins text-[24px] pt-[312px] pl-[48px] pr-[35px]">
                  Workhub office Webflow Webflow Design
                </H3Com>
                <PtagCom className="text-[#ffffffce] pl-[48px] pr-[35px] font-poppins">
                  Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                  aliquam{" "}
                </PtagCom>
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className="hovermain hoverimg2 pb-[32px]">
              <Image src={Hoverimg2} />
              <div className="bg-gradient-to-br from-[#1c1e5334] to-[#1c1e53] hoverimg"></div>
            </div>

            <div className="hovermain">
              <Image src={Hoverimg3} />
              <div className="bg-gradient-to-br from-[#1c1e5334] to-[#1c1e53] hoverimg"></div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HomeProject;
