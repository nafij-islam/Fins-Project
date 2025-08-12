import React from 'react'
import { Container } from 'react-bootstrap';
import WorkCRD from './../WorkCRD';
import workimg1 from '../../assets/WorkCard1.png'
import workimg2 from '../../assets/WorkCard2.png'
import workimg3 from '../../assets/WorkCard3.png'
import workimg4 from '../../assets/WorkCard4.png'
import workimg5 from '../../assets/WorkCard5.png'
import workimg6 from '../../assets/WorkCard6.png'
import './Workpart.css'

const WorkCard = () => {
  return (
   <section className='py-[96px]'>
    <Container>
        <div className='flex flex-wrap justify-between gap-y-[64px]'>
            <WorkCRD src={workimg1} wordbtntext='View Portfolio' CardTitle='Template 1' CardText="Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle."/>
            <WorkCRD src={workimg2} wordbtntext='View Portfolio' CardTitle='Template 1' CardText="Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle."/>
            <WorkCRD src={workimg3} wordbtntext='View Portfolio' CardTitle='Template 1' CardText="Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle."/>
            <WorkCRD src={workimg4} wordbtntext='View Portfolio' CardTitle='Template 1' CardText="Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle."/>
            <WorkCRD src={workimg5} wordbtntext='View Portfolio' CardTitle='Template 1' CardText="Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle."/>
            <WorkCRD src={workimg6} wordbtntext='View Portfolio' CardTitle='Template 1' CardText="Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle."/>
        </div>

    </Container>
   </section>
  )
}

export default WorkCard