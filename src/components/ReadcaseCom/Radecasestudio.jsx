import React from "react";
import { Container } from "react-bootstrap";
import PtagCom from "./../PtagCom";
import H3Com from "./../H3Com";
import Image from "./../Image";
import ReadCAsimg from "../../assets/ReadCasestudio.png";
import './readcase.css'

const Radecasestudio = () => {
  return (
    <section className="py-[128px]">
      <Container>
        <div className="flex">
          <div className="mx-auto">
            <PtagCom className="font-poppins text-[24px] text-[#282938ba] font-semibold">
              Web design and development
            </PtagCom>
            <H3Com className="font-poppins font-semibold text-[48px] w-[525px] pt-[12px] pb-[16px]">
              Finsweet Design case studies
            </H3Com>
            <PtagCom className="w-[820px] text-[16px] font-poppins font-semibold pb-[48px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse.
            </PtagCom>
            <Image src={ReadCAsimg} />
            <div className="pt-[48px] flex gap-[144px] studio-border">
              <div>
                <PtagCom className='font-poppins font-semibold text-[16px] text-[#282938ba]'>Client</PtagCom>
                <H3Com className='font-poppins text-[24px] font-medium '>facebook.com</H3Com>
              </div>
                        <div>
                <PtagCom className='font-poppins font-semibold text-[16px] text-[#282938ba]'>Service</PtagCom>
                <H3Com className='font-poppins text-[24px] font-medium '>Product Design</H3Com>
              </div>
                        <div>
                <PtagCom className='font-poppins font-semibold text-[16px] text-[#282938ba]'>Deliverable</PtagCom>
                <H3Com className='font-poppins text-[24px] font-medium '>UI Screens, UX Flow & Prototype</H3Com>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Radecasestudio;
