import React from 'react'

const Footer = () => {
  return (
    <div className='mt-[250px] mx-[150px]'>
        <div>
            <div className='flex gap-[50px]'>
                <div>
                    <img src="./src/assets/logo.svg" alt="" />
                    <p className='mt-[45px] w-[300px] font-medium text-[24px] text-[#555555]'>Savor the artistry where every dish is a culinary masterpiece</p>
                </div>
                <div>
                    <h2 className='text-[26px] font-semibold '>Useful links</h2>
                    <p className='mt-[30px] w-[300px] font-medium text-[24px] text-[#555555]'>About us</p>
                    <p className='mt-[30px] w-[300px] font-medium text-[24px] text-[#555555]'>Events</p>
                    <p className='mt-[30px] w-[300px] font-medium text-[24px] text-[#555555]'>Blogs</p>
                    <p className='mt-[30px] w-[300px] font-medium text-[24px] text-[#555555]'>FAQ</p>
                </div>
                <div>
                    <h2 className='text-[26px] font-semibold '>Main Menu</h2>
                    <p className='mt-[30px] w-[300px] font-medium text-[24px] text-[#555555]'>Home</p>
                    <p className='mt-[30px] w-[300px] font-medium text-[24px] text-[#555555]'>Offers</p>
                    <p className='mt-[30px] w-[300px] font-medium text-[24px] text-[#555555]'>Menus</p>
                    <p className='mt-[30px] w-[300px] font-medium text-[24px] text-[#555555]'>Reservation</p>
                </div>
                <div>
                    <h2 className='text-[26px] font-semibold '>Contact Us</h2>
                    <p className='mt-[30px] w-[300px] font-medium text-[24px] text-[#555555]'>example@email.com</p>
                    <p className='mt-[30px] w-[300px] font-medium text-[24px] text-[#555555]'>+64 958 248 966</p>
                    <p className='mt-[30px] w-[300px] font-medium text-[24px] text-[#555555]'>Social media</p>
                </div>
            </div>
        </div>
        <div className='flex gap-[20px] items-center mt-[100px] pb-[50px]'>
            <img src="./src/assets/fac.svg" alt="" />
            <img src="./src/assets/ins.svg" alt="" />
            <img src="./src/assets/twi.svg" alt="" />
            <img src="./src/assets/you.svg" alt="" />
            <p className='text-[22px] text-[#555555] font-medium ml-[150px]'>Copyright © 2023 Dscode | All rights reserved</p>
        </div>
    </div>
  )
}

export default Footer