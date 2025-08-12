import React from "react";
import { Card, Button } from "react-bootstrap";
import H3Com from "./H3Com";
import { FaArrowRightLong } from "react-icons/fa6";

const WorkCRD = ({ src, CardTitle, CardText, wordbtntext }) => {
  return (
    <div>
      <Card className="border-0" style={{ width: "623px" }}>
        <img src={src} />
        <Card.Body className="p-0 ">
          <H3Com className="font-poppins font-semibold text-[38px] pt-[26px] pb-[14px]">
            {CardTitle}
          </H3Com>
          <Card.Text className="font-poppins pb-[24px]">{CardText}</Card.Text>
          <Button className="bg-white border-0 text-black p-0   inline-block">
            {wordbtntext}
            <FaArrowRightLong />
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default WorkCRD;
