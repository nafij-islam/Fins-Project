import React from "react";
import { Container, Form, Row, Col } from "react-bootstrap";
import H3Com from "./../H3Com";
import PtagCom from "./../PtagCom";
import './form.css'
import Button from '../Button';

const FormCom = () => {
  return (
    <section className="pb-[128px]">
      <Container>
        <div className="text-center pt-[128px]">
          <H3Com className="text-[48px] font-poppins font-semibold pb-[16px]">
            Contact Us
          </H3Com>
          <PtagCom className="font-poppins w-[500px] inline-block pb-[64px] ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </PtagCom>
        </div>

        <div className="w-[1061px] mx-auto px-[76px] py-[55px] bg-[#F4F6FC]">
          <Form className="flex flex-wrap gap-y-[24px] gap-x-[32px]">
            <Form.Group className="w-[437px]">
              <Form.Label>Name</Form.Label>
              <Form.Control className="input-form" type="text" placeholder="Enter your name" />
            </Form.Group>

            <Form.Group className="w-[437px]" controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control className="input-form" type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="w-[437px]">
              <Form.Label>Subject</Form.Label>
              <Form.Control className="input-form" type="text" placeholder="Provide context" />
            </Form.Group>

            <Form.Group className="w-[437px]">
              <Form.Label>Subject</Form.Label>
              <Form.Select className="input-form" aria-label="Default select example">
                <option>Open this select menu</option>
                <option value="1">Bangla</option>
                <option value="2">English</option>
                <option value="3">Hindi</option>
              </Form.Select>
            </Form.Group>


              <Form.Group className="w-full">
              <Form.Label>Message</Form.Label>
              <Form.Control className="input-form" type="text" placeholder="Write your  question here" />
            </Form.Group>
            <button className="bg-[#282938] text-white px-[65px] py-[16px] rounded-[41px] mt-[32px]">Send Messege</button>


          </Form>
        </div>
      </Container>
    </section>
  );
};

export default FormCom;
