import React from "react";
import { Container } from "react-bootstrap";
import H3Com from "./../H3Com";
import PtagCom from "./../PtagCom";
import ReadCAimg2 from "../../assets/ReadCasestudio2.png";
import "./readcase.css";
import Image from "./../Image";
import Button from './../Button';

const Readcaseproject = () => {
  return (
    <section className="pb-[128px]">
      <Container>
        <div className="flex">
          <div className="mx-auto">
            <H3Com className="font-poppins text-[38px] font-semibold pb-[12px]">
              About the project
            </H3Com>
            <PtagCom className="font-poppins text-[16px] font-normal w-[840px] text-[#2829389c] pb-[24px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </PtagCom>
            <al>
              <li className="text-[16px] font-poppins pb-[16px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </li>
              <li className="text-[16px] font-poppins pb-[16px]">
                Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              </li>
              <li className="text-[16px] font-poppins pb-[16px]">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
              </li>
              <li className="text-[16px] font-poppins pb-[64px]">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
              </li>
            </al>
            <Image design="w-[840px]" src={ReadCAimg2} />
            <H3Com className="font-poppins text-[38px] font-semibold pb-[12px] pt-[64px]">
              How we do it
            </H3Com>
            <PtagCom className="font-poppins text-[16px] font-normal w-[840px] text-[#2829389c] pb-[24px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </PtagCom>
            <al>
              <li className="text-[16px] font-poppins pb-[16px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </li>
              <li className="text-[16px] font-poppins pb-[16px]">
                Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              </li>
              <li className="text-[16px] font-poppins pb-[16px]">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
              </li>
              <li className="text-[16px] font-poppins pb-[64px]">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
              </li>
            </al>
          </div>
        </div>
        <div className="flex readproject-list">
          <div className="flex gap-[60px] mx-auto">
            <PtagCom className="font-poppins text-[18px] font-medium">
              Keywords
            </PtagCom>
            <PtagCom className="font-poppins text-[18px] font-medium">
              Design{" "}
            </PtagCom>
            <PtagCom className="font-poppins text-[18px] font-medium">
              UI/UX{" "}
            </PtagCom>
            <PtagCom className="font-poppins text-[18px] font-medium">
              Wireframing
            </PtagCom>
            <PtagCom className="font-poppins text-[18px] font-medium">
              Branding
            </PtagCom>
            <PtagCom className="font-poppins text-[18px] font-medium">
              Development
            </PtagCom>
            <PtagCom className="font-poppins text-[18px] font-medium">
              webflow
            </PtagCom>
          </div>
        </div>

        <div className="pt-[102px] text-center">
          <H3Com className='font-poppins text-[48px] font-semibold w-[800px] inline-block pb-[20px]'>Let's build something great together</H3Com>
          <PtagCom className='text-[16px] font-poppins font-medium inline-block w-[600px] pb-[40px]'>
            Nullam vitae purus at tortor mattis dapibus. Morbi purus est,
            ultricies nec dolor sit amet, scelerisque cursus purus.
          </PtagCom>
          <div>

          <Button className="bg-[#FCD980] py-[16px] px-[66px] rounded-[41px] inline-block">Contact Us</Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Readcaseproject;
