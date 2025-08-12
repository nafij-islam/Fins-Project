import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Fulogo2 from "../../assets/Fulogo2.png";
import Fulogo3 from "../../assets/Fulogo3.png";
import Fulogo4 from "../../assets/Fulogo4.png";
import Fulogo5 from "../../assets/Fulogo5.png";
import Fulogo6 from "../../assets/Fulogo6.png";
import Image from "./../Image";
import PtagCom from "./../PtagCom";
import H3Com from "./../H3Com";
import Fucard from "./../Fucard";
import Fuicon1 from "../../assets/Fuicon1.png";
import Fuicon2 from "../../assets/Fuicon2.png";
import Fuicon3 from "../../assets/Fuicon3.png";

const Fuwork = () => {
  return (
    <section className="py-[96px]">
      <Container>
        <Row className="items-center">
          <Col lg={2}>
            <div>
              <H3Com className="pt-0">100.000+</H3Com>
              <PtagCom>Figma Users</PtagCom>
            </div>
          </Col>
          <Col lg={10}>
            <div className="flex justify-between">
              <Image src={Fulogo2} />
              <Image src={Fulogo3} />
              <Image src={Fulogo4} />
              <Image src={Fulogo5} />
              <Image src={Fulogo6} />
            </div>
          </Col>
        </Row>

        <div className="text-center pt-[96px]">
          <H3Com className="font-poppins font-semibold text-[48px] w-[700px] pb-[48px] inline-block">
            The benefits of working with our team
          </H3Com>
        </div>

        <div className="flex justify-between">
          <Fucard
            src={Fuicon1}
            CardTitle="Customize with ease"
            cardtext="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim."
          />

          <Fucard
            src={Fuicon2}
            CardTitle="Customize with ease"
            cardtext="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim."
          />

          <Fucard
            src={Fuicon3}
            CardTitle="Customize with ease"
            cardtext="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim."
          />
        </div>
      </Container>
    </section>
  );
};

export default Fuwork;
