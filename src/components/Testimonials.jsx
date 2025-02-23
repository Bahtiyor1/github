import React from 'react'

const Testimonials = () => {
    return (
        <div className='mx-[150px] mt-[220px] flex items-center justify-between'>
            <div>
                <img className='w-[16000px]' src="./src/assets/povar.svg" alt="" />
            </div>
            <div>
                <p className='tracking-[3px] font-bold text-[20px] text-[#FF6868] uppercase'>Testimonials</p>
                <h2 className='w-[700px] text-[60px] font-bold pt-[53px]'>What Our Customers Say About Us</h2>
                <p className='text-[#555555] text-[26px] font-medium pt-[29px]'>“I had the pleasure of dining at Foodi last night, and I'm still raving about the experience! The attention to detail in presentation and service was impeccable”</p>
                <div className='flex items-center gap-[44px] pt-[67px]'>
                    <img src="./src/assets/peoples.svg" alt="" />
                    <div>
                        <p className='font-semibold text-[26px]'>Customer Feedback</p>
                        <p className='flex gap-[15px] text-[#454545] text-[24px] font-semibold'><img src="./src/assets/star.svg" alt="" />4.9 <span className='text-[#807E7E]'>(18.6k Reviews)</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials