import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PtagCom from "./../PtagCom";
import H3Com from "./../H3Com";
import Fucard from "./../Fucard";
import HomeCicon from "../../assets/HomCicon.png";
import HomeCicon2 from "../../assets/HomCicon2.png";
import HomeCicon3 from "../../assets/HomCicon3.png";
import HomeCicon4 from "../../assets/HomCicon4.png";
import HomeCicon5 from "../../assets/HomCicon5.png";
import HomeCicon6 from "../../assets/HomCicon6.png";

const HomeDesignC = () => {
  return (
    <section className="py-[128px] bg-[#F4F6FC] design-section">
      <Container>
        <div className="text-center pb-[47px]">
          <PtagCom className="font-poppins font-medium pb-[12px]">
            Features
          </PtagCom>
          <H3Com className="w-[630px]  design-heading inline-block font-poppins text-[48px] font-semibold">
            Design that solves problems, one product at a time
          </H3Com>
        </div>
        <Row className="gap-y-[24px]">
          <div className="design-card-main">
          <Col lg={4}>
            <Fucard
              src={HomeCicon}
              CardTitle="Uses Client First"
              cardtext="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. "
            />
          </Col>
          <Col lg={4}>
            <Fucard
              src={HomeCicon2}
              CardTitle="Uses Client First"
              cardtext="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. "
            />
          </Col>
          <Col lg={4}>
            <Fucard
              src={HomeCicon3}
              CardTitle="Uses Client First"
              cardtext="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. "
            />
          </Col>
          <Col lg={4}>
            <Fucard
           
              src={HomeCicon4}
              CardTitle="Uses Client First"
              cardtext="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. "
            />
          </Col>
                    <Col lg={4}>
            <Fucard
           
              src={HomeCicon5}
              CardTitle="Uses Client First"
              cardtext="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. "
            />
          </Col>
                    <Col lg={4}>
            <Fucard
           
              src={HomeCicon6}
              CardTitle="Uses Client First"
              cardtext="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. "
            />
          </Col>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default HomeDesignC;
