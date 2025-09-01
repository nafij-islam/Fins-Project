import React from 'react'
import HomeBloimg1 from '../../assets/Homeblogimg1.png'
import HomeBloimg2 from '../../assets/Homeblogimg2.png'
import HomeBloimg3 from '../../assets/Homeblogimg3.png'
import { Container } from 'react-bootstrap';
import H3Com from './../H3Com';
import BlogCard from './../BlogCard';


const HomeBLog = () => {
  return (
    <section className='py-[128px]'>
        <Container>
            <H3Com className="font-poppins text-[46px] font-semibold">
          Our Blog
        </H3Com>

        <div className="flex flex-wrap gap-[40px] gap-y-[64px] pt-[48px]">
          <BlogCard
            src={HomeBloimg1}
            btntext="Read More"
            cardtext="See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract"
            date="27 Jan 2021"
            CardTitle="How one Webflow user grew his single person consultancy from $0-100K in 14 months"
          />
          <BlogCard
            src={HomeBloimg2}
            btntext="Read More"
            cardtext="See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract"
            date="27 Jan 2021"
            CardTitle="How one Webflow user grew his single person consultancy from $0-100K in 14 months"
          />
          <BlogCard
            src={HomeBloimg3}
            btntext="Read More"
            cardtext="See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract"
            date="27 Jan 2021"
            CardTitle="How one Webflow user grew his single person consultancy from $0-100K in 14 months"
          />
 
        </div>

        </Container>
    </section>
  )
}

export default HomeBLog