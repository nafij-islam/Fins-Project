import React from "react";
import { Container } from "react-bootstrap";
import AboutBanner1 from "../../assets/AboutBanner1.png";

const AboutBanner = () => {
  return (
    <section className="py-[128px]">
      <Container>
        <div className="flex justify-between">
          <div>
            <p className="text-[18px] font-poppins font-medium pb-[8px] m-0">
              About us
            </p>
            <h2 className="text-[38px] font-poppins font-semibold w-[450px] leading-[56px] m-0 pb-[31px]">
              Our designs solve problems
            </h2>
            <p className="w-[480px] font-poppins font-normal leading-[28px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>
          <div>
            <img src={AboutBanner1} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutBanner;
