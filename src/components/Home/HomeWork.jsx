import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import H3Com from "./../H3Com";
import PtagCom from "./../PtagCom";
import Button from "./../Button";
import { FaArrowRightLong } from "react-icons/fa6";
import HomeWorkCard from "./../HomeWorkCard";
import pointer1 from "../../assets/pointer1.png";
import pointer2 from "../../assets/pointer2.png";
import pointer3 from "../../assets/pointer3.png";
import pointer4 from "../../assets/pointer4.png";

const HomeWork = () => {
  return (
    <section className="pt-[128px] pb-[50px] work-section bg-[#F4F6FC]">
      <Container>
        <Row>
          <Col lg={4}>
            <div className="heading-part">
              <H3Com className="font-poppins work-heading text-[48px] font-semibold pb-[16px]">
                How we work
              </H3Com>
              <PtagCom className="font-poppins text-[16px] font-normal pb-[16px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </PtagCom>
              <div className="work-btn">
                <Button className="flex items-center gap-[10px] text-[#2405F2]">
                  Get in touch with us <FaArrowRightLong />{" "}
                </Button>
              </div>
            </div>
          </Col>

          <Col lg={{ spam: 6, offset: 1 }}>
            <Row>
              <div className="work-card-main">
              <Col lg={6}>
                <HomeWorkCard
                  src={pointer1}
                  title="Strategy"
                  pera="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam ."
                />
                <HomeWorkCard
                  src={pointer2}
                  title="Wireframing"
                  pera="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam ."
                />
              </Col>

              <Col lg={6}>
                <HomeWorkCard
                  src={pointer3}
                  title="Design"
                  pera="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam ."
                />
                <HomeWorkCard
                  src={pointer4}
                  title="Development"
                  pera="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam ."
                />
              </Col>
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HomeWork;
