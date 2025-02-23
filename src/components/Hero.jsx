import React from 'react'

const Hero = () => {
    return (
        <div className='mx-[150px] flex items-center justify-between mt-[50px]'>
            <div>
                <h1 className='font-bold text-[62px] w-[600px]'>Dive into Delights Of Delectable <span className='text-[#39DB4A]'>Food</span></h1>
                <p className='font-medium text-[26px] text-[#4A4A4A] w-[600px] mt-[60px]'>Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship</p>
                <div className='mt-[70px] flex gap-[30px]'>
                    <button className='bg-[#39DB4A] shadow-[-2px_22px_38px_rgba(142,255,154,0.3)] w-[230px] h-[80px] rounded-[40px] text-white text-[26px] font-semibold '>Order Now</button>
                    <button className='text-[26px] font-semibold text-[#4D4D4D]'>Watch Video</button>
                    <button className='bg-white w-[80px] h-[80px] rounded-full shadow-2xl flex items-center justify-center'><img src="./src/assets/pol.svg" alt="" /></button>
                </div>
            </div>
            <div>
                <img src="./src/assets/hero.svg" alt="" />
            </div>
        </div>
    )
}

export default Hero