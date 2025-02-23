import React from 'react'

const Story = () => {
    return (
        <div className='mx-[110px] flex justify-between mt-[290px]'>
            <div>
            <p className='tracking-[3px] font-bold text-[20px] text-[#FF6868] uppercase'>Our Story & Services</p>
                <h2 className='font-bold text-[60px] w-[700px] mt-[50px]'>Our Culinary Journey And Services</h2>
            <p className='text-[#555555] text-[26px] font-medium w-[610px] mt-[50px]'>Rooted in passion, we curate unforgettable dining experiences and offer exceptional services, blending culinary artistry with warm hospitality.</p>
            <button className='bg-[#39DB4A] shadow-[-2px_22px_38px_rgba(142,255,154,0.3)] w-[215px] mt-[53px] h-[80px] rounded-[40px] text-white text-[26px] font-semibold '>Explore</button>

            </div>
            <div className='flex gap-[36px] flex-wrap'>
                <div className='bg-white w-[277px] h-[297px] shadow-xl rounded-[30px] flex flex-col items-center'>
                    <img className='pt-[45px]' src="./src/assets/salad.svg" alt="" />
                    <p className='text-[24px] text-[#5FE26C] font-bold uppercase mt-[32px]'>Catering</p>
                    <p className='text-[#90BD95] text-[20px] font-semibold text-center px-[28px]'>Delight your guests with our flavors and  presentation</p>
                </div>
                <div className='bg-white w-[277px] h-[297px] shadow-xl rounded-[30px] flex flex-col items-center'>
                    <img className='pt-[45px]' src="./src/assets/fast.svg" alt="" />
                    <p className='text-[24px] text-[#5FE26C] font-bold uppercase mt-[32px]'>Fast delivery</p>
                    <p className='text-[#90BD95] text-[20px] font-semibold text-center px-[28px]'>We deliver your order promptly to your door</p>
                </div>
                <div className='bg-white w-[277px] h-[297px] shadow-xl rounded-[30px] flex flex-col items-center'>
                    <img className='pt-[45px]' src="./src/assets/cart.svg" alt="" />
                    <p className='text-[24px] text-[#5FE26C] font-bold uppercase mt-[32px]'>Online Ordering</p>
                    <p className='text-[#90BD95] text-[20px] font-semibold text-center px-[28px]'>Explore menu & order with ease using our Online Ordering</p>
                </div>
                <div className='bg-white w-[277px] h-[297px] shadow-xl rounded-[30px] flex flex-col items-center'>
                    <img className='pt-[45px]' src="./src/assets/gift.svg" alt="" />
                    <p className='text-[24px] text-[#5FE26C] font-bold uppercase mt-[32px]'>Gift Cards</p>
                    <p className='text-[#90BD95] text-[20px] font-semibold text-center px-[28px]'>Give the gift of exceptional dining with Foodi Gift Cards</p>
                </div>
            </div>
        </div>
    )
}

export default Story