import React from "react";
import { Container } from "react-bootstrap";
import clintcardimg1 from "../../assets/clintcardimg1.png";
import clintcardimg2 from "../../assets/clintcardimg2.png";
import clintcardimg3 from "../../assets/clintcardimg3.png";
import clintcardimg4 from "../../assets/clintcardimg4.png";

const Fuclient = () => {
  return (
    <>
    <section className="py-[128px]">
      <Container>
        <div className="flex justify-between">
          <div>
            <p className="text-[18px] font-poppins font-medium pb-[16px]">
              Use Client-first
            </p>
            <h2 className="text-[38px] font-poppins font-semibold w-[580px] leading-[56px] pb-[16px]">
              Top agencies and freelancers around the world use{" "}
              <span className="block">Client-first</span>
            </h2>
            <p className="w-[550px] font-poppins font-normal leading-[28px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation.
            </p>
          </div>
          <div>
            <img src={clintcardimg1} />
          </div>
        </div>
      </Container>
    </section>


    <section className="bg-[#F4F6FC]">
      <Container>
        <div className="flex flex-row-reverse justify-between py-[128px]">
          <div>
            <p className="text-[18px] font-poppins font-medium pb-[16px]">
              Use Client-first
            </p>
            <h2 className="text-[38px] font-poppins font-semibold w-[580px] leading-[56px] pb-[16px]">
              Top agencies and freelancers around the world use{" "}
              <span className="block">Client-first</span>
            </h2>
            <p className="w-[550px] font-poppins font-normal leading-[28px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation.
            </p>
          </div>
          <div>
            <img src={clintcardimg2} />
          </div>
        </div>
      </Container>
    </section>



        <section className="py-[128px]">
      <Container>
        <div className="flex justify-between">
          <div>
            <p className="text-[18px] font-poppins font-medium pb-[16px]">
              Use Client-first
            </p>
            <h2 className="text-[38px] font-poppins font-semibold w-[580px] leading-[56px] pb-[16px]">
              Top agencies and freelancers around the world use{" "}
              <span className="block">Client-first</span>
            </h2>
            <p className="w-[550px] font-poppins font-normal leading-[28px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation.
            </p>
          </div>
          <div>
            <img src={clintcardimg3} />
          </div>
        </div>
      </Container>
    </section>



        <section className="bg-[#fcd9802f]">
      <Container>
        <div className="flex flex-row-reverse justify-between py-[128px]">
          <div>
            <p className="text-[18px] font-poppins font-medium pb-[16px]">
              Use Client-first
            </p>
            <h2 className="text-[38px] font-poppins font-semibold w-[580px] leading-[56px] pb-[16px]">
              Top agencies and freelancers around the world use{" "}
              <span className="block">Client-first</span>
            </h2>
            <p className="w-[550px] font-poppins font-normal leading-[28px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation.
            </p>
          </div>
          <div>
            <img src={clintcardimg4} />
          </div>
        </div>
      </Container>
    </section>

    </>
  );
};

export default Fuclient;
