import React from "react";
import { Container } from "react-bootstrap";
import PtagCom from "./../PtagCom";
import H3Com from "./../H3Com";
import { FaFacebook,FaTwitter,FaInstagram,FaLinkedin } from "react-icons/fa";


const Workbanner = () => {
  return (
    <section className="py-[96px] bg-[#F4F6FC]">
      <Container>
        <div className="text-center">
          <PtagCom  className='font-poppins font-medium text-[#282938af]'>What we created</PtagCom>
          <H3Com className='text-[48px] font-poppins font-semibold pt-[5px] pb-[24px] '>Our Work Portfolio</H3Com>
          <PtagCom className='w-[800px] inline-block pb-[32px]'>
            We help teams create great digital products by providing them with
            tools and technology to make the design-to-code process universally
            accessible.
          </PtagCom>
        </div>
        <div className="flex gap-[27px] justify-center">
            <FaFacebook/>
            <FaTwitter/>
            <FaInstagram/>
            <FaLinkedin/>
        </div>
      </Container>
    </section>
  );
};

export default Workbanner;
