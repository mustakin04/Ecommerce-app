import React from 'react'
import Container from './Container'

const Language = () => {
  return (
    <div className='bg-black py-[12px] w-full'>
        <Container className="flex ">
            <div className='flex w-[80%] justify-center items-center'>
                <p className='font-Poppins font-normal text-[14px] text-white '>
                  Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
                  <h5 className='font-Poppins font-semibold text-[14px] text-white text-center'>ShopNow</h5>
            </div>
            <div className='w-[20%]  text-end text-white  text-[14px]
             bonder-none outline-none'>
              <select className='!bg-black font-Poppins font-normal'>
                <option selected>English</option>
                <option value="">Bangla</option>
              </select>
            </div>
        </Container>
    </div>
  )
}

export default Language