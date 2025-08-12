import React from "react";
import { Container } from "react-bootstrap";
import H3Com from "./../H3Com";
import PtagCom from "./../PtagCom";
import Button from "./../Button";

const Worklast = () => {
  return (
    <section className="pb-[128px]">
      <Container>
        <div className="text-center">
          <H3Com className="text-[48px] font-poppins font-semibold w-[800px] pb-[20px] inline-block">
            Let's build something great together
          </H3Com>
          <PtagCom className="font-[16px] font-poppins w-[800px] pb-[40px] inline-block">
            Nullam vitae purus at tortor mattis dapibus. Morbi purus est,
            ultricies nec dolor sit amet, scelerisque cursus purus.
          </PtagCom>
          <div>
            <Button className="bg-[#FCD980] py-[16px] rounded-[41px] px-[64px] inline-block text-center text-[18px]">
              Contact Us
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Worklast;
