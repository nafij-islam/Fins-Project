import React from "react";
import Navber from "./../Home/Navber";
import { Container } from "react-bootstrap";
import H3Com from "./../H3Com";
import PtagCom from "./../PtagCom";

const PrivacyCom = () => {
  return (
    <section className="pb-[128px]">
      <Container>
        <div className="text-center">
          <H3Com className=" pt-[128px] pb-[16px] font-poppins text-[48px] font-semibold ">
            Privacy Policy
          </H3Com>
          <PtagCom className="w-[500px] inline-block font-poppins text-[16px] font-medium ">
            When you’re ready to go beyond prototyping in Figma, Webflow’s ready
            to help you bring your{" "}
          </PtagCom>
        </div>

        <div className=" ml-[232px]">
          <H3Com className=" font-poppins text-[38px] font-semibold pt-[64px]  inlin">
            Lorem ipsum dolor.
          </H3Com>
          <PtagCom className=" font-poppins font-normal text-[16px] pt-[32px] pb-[24px] w-[830px] ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.{" "}
            <span className=" text-[#2405F2]">Excepteur sint occaecat</span>{" "}
            cupidatat non proident.
          </PtagCom>

          <PtagCom className="w-[800px] font-poppins text-[16px]">
            Sunt in culpa qui officia deserunt mollit anim id est laborum. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </PtagCom>

          <H3Com className="pt-[40px] text-[38px] font-poppins font-semibold w-[800px] ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </H3Com>
          <PtagCom className="pt-[32px] font-poppins pb-[24px] w-[840px] font-normal ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident. Dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris.
          </PtagCom>
          <al>
            <li className="pb-[12px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
            </li>
            <li  className="pb-[12px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
            </li>
            <li  className="pb-[12px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
            </li>
            <li  className="pb-[12px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
            </li>
          </al>
          <PtagCom className="font-poppins pt-[16px] text-[16px] w-[820px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
          </PtagCom>
        </div>
      </Container>
    </section>
  );
};

export default PrivacyCom;
