import React from "react";
import aboutimg from '../../assets/AboutProsses.png'

const AboutProCard = ({ alt,heading,pera}) => {
  return (
    <>
      <div>
        <img src={aboutimg} alt={alt} />
        <h3 className="pt-[32px] pb-[8px] font-poppins text-[24px]">{heading}</h3>
        <p className="font-poppins text-[16px] w-[300px]">{pera}</p>
        
      </div>
    </>
  );
};

export default AboutProCard;
