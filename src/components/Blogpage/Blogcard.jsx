import React from "react";
import { Container } from "react-bootstrap";
import H3Com from "./../H3Com";
import BlogCard from "./../BlogCard";
import Blogcard1 from "../../assets/Blogcard1.png";
import Blogcard2 from "../../assets/Blogcard2.png";
import Blogcard3 from "../../assets/Blogcard3.png";
import Blogcard4 from "../../assets/Blogcard4.png";
import Blogcard5 from "../../assets/Blogcard5.png";
import Blogcard6 from "../../assets/Blogcard6.png";

const Blogcard = () => {
  return (
    <section className="pb-[128px]">
      <Container>
        <H3Com className="text-center font-poppins text-[48px] font-semibold">
          Our Blog
        </H3Com>

        <div className="flex flex-wrap gap-[40px] gap-y-[64px] pt-[48px]">
          <BlogCard
            src={Blogcard1}
            btntext="Read More"
            cardtext="See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract"
            date="27 Jan 2021"
            CardTitle="How one Webflow user grew his single person consultancy from $0-100K in 14 months"
          />
          <BlogCard
            src={Blogcard2}
            btntext="Read More"
            cardtext="See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract"
            date="27 Jan 2021"
            CardTitle="How one Webflow user grew his single person consultancy from $0-100K in 14 months"
          />
          <BlogCard
            src={Blogcard3}
            btntext="Read More"
            cardtext="See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract"
            date="27 Jan 2021"
            CardTitle="How one Webflow user grew his single person consultancy from $0-100K in 14 months"
          />
          <BlogCard
            src={Blogcard4}
            btntext="Read More"
            cardtext="See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract"
            date="27 Jan 2021"
            CardTitle="How one Webflow user grew his single person consultancy from $0-100K in 14 months"
          />
          <BlogCard
            src={Blogcard5}
            btntext="Read More"
            cardtext="See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract"
            date="27 Jan 2021"
            CardTitle="How one Webflow user grew his single person consultancy from $0-100K in 14 months"
          />
          <BlogCard
            src={Blogcard6}
            btntext="Read More"
            cardtext="See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract"
            date="27 Jan 2021"
            CardTitle="How one Webflow user grew his single person consultancy from $0-100K in 14 months"
          />
        </div>
      </Container>
    </section>
  );
};

export default Blogcard;
