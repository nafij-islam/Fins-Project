import React from "react";
import Rbimg from "../../assets/Rbimg.png";
import { Container } from "react-bootstrap";
import H3Com from "../../components/H3Com";
import PtagCom from "../../components/PtagCom";
import Image from "../../components/Image";

const BlogCom = () => {
  return (
    <section className="py-[128px]">
      <Container>
        <div className="items-center  flex flex-col ">
          <H3Com className=" text-center text-[48px] pb-[16px] font-poppins font-semibold w-[900px]">
            A UX Case Study on Creating a Studious Environment for Students
          </H3Com>
          <PtagCom>
            Andrew Posted
            <span className="pb-[48px] inline-block text-black text-[18px] font-medium">
              on 27th January 2021
            </span>
          </PtagCom>
          <Image src={Rbimg} />
          <PtagCom className="pt-[48px] font-poppins w-[800px] text-center">
            Apparently we had reached a great height in the atmosphere, for the
            sky was a dead black, and the stars had ceased to twinkle. By the
            same illusion which lifts the horizon of the sea to the level of the
            spectator on a hillside.
          </PtagCom>
          <PtagCom className='text-[#2405F2] pt-[16px]'>see more</PtagCom>
        </div>
      </Container>
    </section>
  );
};

export default BlogCom;
