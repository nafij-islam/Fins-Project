import React from "react";
import { Container } from "react-bootstrap";
import H3Com from "./../H3Com";
import PtagCom from "./../PtagCom";
import Image from "./../Image";
import Rbimg2 from "../../assets/Rbimg2.jpg";
import './read.css'

const ReadBCom = () => {
  return (
    <section className="pt-[80px]">
      <Container className="flex">
        <div className="read-bcom mx-auto ">
          <H3Com className="text-[38px] font-poppins font-semibold w-[800px] pb-[32px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </H3Com>
          <PtagCom className="text-[16px] font-poppins font-normal w-[840px] pb-[40px] inline-block">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
            <span className="text-[#2405F2]"> Excepteur sint occaecat</span>
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </PtagCom>
          <H3Com className="text-[38px] font-poppins font-semibold pb-[12px] w-[">
            Ut enim ad minim veniam, quis nostrud.
          </H3Com>
          <PtagCom className="w-[840px] font-poppins pb-[44px] inline-block ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat <span className="text-[#2405F2]">cupidatat non</span> proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </PtagCom>
          <al>
            <li className="pb-[12px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
            </li>
            <li className="pb-[12px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
            </li>
            <li className="pb-[24px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
            </li>
          </al>
          <PtagCom className="text-[16px] font-poppins w-[840px] pb-[32px] inline-block ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud <span className="text-[#2405F2]">exercitation ullamco</span> laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </PtagCom>
          <Image src={Rbimg2} />

          <H3Com className="text-[38px] font-poppins font-semibold pt-[56px] pb-[32px]">
            Ut enim ad minim veniam, quis nostrud.
          </H3Com>
          <PtagCom className='font-poppins text-[16px] w-[840px] pb-[96px] inline-block '>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud <span className="text-[#2405F2]">exercitation ullamco</span> laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </PtagCom>
        </div>
      </Container>
    </section>
  );
};

export default ReadBCom;
