import React from 'react'
import H3Com from './H3Com';
import PtagCom from './PtagCom';

const HomeWorkCard = ({src,title,pera}) => {
  return (
    <div className='pb-[45px]'>
        <img src={src}/>
        <H3Com className='pt-[16px] pb-[6px] font-poppins text-[32px] font-medium'>{title}</H3Com>
        <PtagCom className='font-poppins headin-card-pera w-[296px]'>{pera}</PtagCom>
    </div>
  )
}

export default HomeWorkCard