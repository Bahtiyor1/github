import React from 'react';
const Menu = () => {
    return (
        <div className='mx-[150px] mt-[200px] relative'>
            <p className='tracking-[3px] font-bold text-[20px] text-[#FF6868] uppercase'>Special Dishes</p>
            <h2 className='w-[580px] text-[60px] font-bold '>Standout Dishes From Our Menu</h2>
            <div className='flex gap-[50px] absolute right-0 top-[120px]'>
                <button className='w-[80px] h-[80px] rounded-full bg-[#EFEFEF] flex items-center justify-center'><img src="./src/assets/arrow1.svg" alt="" /></button>
                <button className='w-[80px] h-[80px] rounded-full bg-[#39DB4A] flex items-center justify-center'><img src="./src/assets/arrow2.svg" alt="" /></button>
            </div>
            <div className='flex gap-[40px] mt-[60px]'>
                <div className='relative w-[446px] h-[523px] rounded-[40px] bg-white shadow-xl'>
                    <img className='absolute right-0' src="./src/assets/fav.svg" alt="" />
                    <div className='flex flex-col items-center pt-[37px]'>
                        <img className='' src="./src/assets/Fattoush salad.svg" alt="" />
                    </div>
                    <p className='font-semibold text-[30px] pl-[46px] mt-[25px]'>Fattoush salad</p>
                    <p className='font-semibold text-[22px] pl-[46px] mt-[19px] text-[#555555]'>Description of the item</p>
                    <div className='mt-[28px] flex justify-between px-[46px] items-center'>
                        <p className='font-semibold text-[30px] '><span className='text-[#FF6868] text-[24px]'>$</span>24.00</p>
                        <p className='flex items-center gap-[15px] text-[24px] text-[#454545] font-semibold'><img src="./src/assets/star.svg" alt="" />4.9</p>
                    </div>
                </div>
                <div className='relative w-[446px] h-[523px] rounded-[40px] bg-white shadow-xl'>
                    <img className='absolute right-0' src="./src/assets/fav.svg" alt="" />
                    <div className='flex flex-col items-center pt-[37px]'>
                        <img className='' src="./src/assets/Vegetable salad.svg" alt="" />
                    </div>
                    <p className='font-semibold text-[30px] pl-[46px] mt-[25px]'>Fattoush salad</p>
                    <p className='font-semibold text-[22px] pl-[46px] mt-[19px] text-[#555555]'>Description of the item</p>
                    <div className='mt-[28px] flex justify-between px-[46px] items-center'>
                        <p className='font-semibold text-[30px] '><span className='text-[#FF6868] text-[24px]'>$</span>24.00</p>
                        <p className='flex items-center gap-[15px] text-[24px] text-[#454545] font-semibold'><img src="./src/assets/star.svg" alt="" />4.9</p>
                    </div>
                </div>
                <div className='relative w-[446px] h-[523px] rounded-[40px] bg-white shadow-xl'>
                    <img className='absolute right-0' src="./src/assets/fav.svg" alt="" />
                    <div className='flex flex-col items-center pt-[37px]'>
                        <img className='' src="./src/assets/Fattoush salad.svg" alt="" />
                    </div>
                    <p className='font-semibold text-[30px] pl-[46px] mt-[25px]'>Fattoush salad</p>
                    <p className='font-semibold text-[22px] pl-[46px] mt-[19px] text-[#555555]'>Description of the item</p>
                    <div className='mt-[28px] flex justify-between px-[46px] items-center'>
                        <p className='font-semibold text-[30px] '><span className='text-[#FF6868] text-[24px]'>$</span>24.00</p>
                        <p className='flex items-center gap-[15px] text-[24px] text-[#454545] font-semibold'><img src="./src/assets/star.svg" alt="" />4.9</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu;