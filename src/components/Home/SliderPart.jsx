import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import H3Com from "../H3Com";
import PtagCom from "../PtagCom";
import Image from "../Image";
import sliderimg from "../../assets/sliderimg.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const SliderPart = () => {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className="py-[128px]">
      <Container>
        <Row className="g-0">
          <Col lg={4}>
            <div>
              <H3Com className="text-[38px] font-poppins font-semibold pb-[16px] w-[350px]">
                What our clients say about us
              </H3Com>
              <PtagCom className="text-[16px] font-poppins font-medium w-[400px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.
              </PtagCom>
            </div>
          </Col>

          <Col lg={8}>
            <Slider {...settings}>
              <div>
                <H3Com className="font-poppins text-[32px] font-medium ">
                  "The best agency we’ve worked with so far. They understand our
                  product and are able to add new features with a great focus."
                </H3Com>
                <div className="pt-[38px] flex items-center gap-[14px]">
                  <Image src={sliderimg} />
                  <div>
                    <H3Com className="text-[18px] font-poppins font-medium pb-[3px]">
                      Jenny Wilson
                    </H3Com>
                    <PtagCom className="text-[12px] font-poppins font-medium">
                      Vice President
                    </PtagCom>
                  </div>
                </div>
              </div>
              <div>
                <H3Com className="font-poppins text-[32px] font-medium ">
                  "The best agency we’ve worked with so far. They understand our
                  product and are able to add new features with a great focus."
                </H3Com>
                <div className="pt-[38px] flex items-center gap-[14px]">
                  <Image src={sliderimg} />
                  <div>
                    <H3Com className="text-[18px] font-poppins font-medium pb-[3px]">
                      Jenny Wilson
                    </H3Com>
                    <PtagCom className="text-[12px] font-poppins font-medium">
                      Vice President
                    </PtagCom>
                  </div>
                </div>
              </div>
            </Slider>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SliderPart;
