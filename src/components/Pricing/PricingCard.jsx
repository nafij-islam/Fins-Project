import React from "react";
import { Container } from "react-bootstrap";
import { TbTriangleInvertedFilled } from "react-icons/tb";

import H3Com from "./../H3Com";
import PtagCom from "./../PtagCom";
import PricingCardCom from './../PricingCardCom';

const PricingCard = () => {
  return (
    <section className="py-[128px]">
      <Container>
        <div className="text-center">
          <H3Com className="font-poppins text-[48px] font-medium pb-[16px]">
            Our Pricing Plans
          </H3Com>
          <PtagCom className="font-poppins text-[16px] font-medium w-[550px] inline-block">
            When you’re ready to go beyond prototyping in Figma, Webflow is
            ready to help you bring your designs to life — without coding them.
          </PtagCom>
        </div>

        <div className="pt-[64px]">
          <PricingCardCom/>
        </div>

        
      </Container>
    </section>
  );
};

export default PricingCard;
