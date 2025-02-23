import React from 'react'

const Categories = () => {
    return (
        <div className='mt-[100px] mx-[150px]'>
            <div>
                <p className='tracking-[3px] font-bold text-[20px] text-[#FF6868] text-center uppercase'>Customer Favorites</p>
                <h2 className='text-[60px] font-bold text-center mt-[29px]'>Popular Catagories</h2>
            </div>
            <div className='flex gap-[40px] mt-[78px]'>
                <div className='w-[326px] h-[326px] rounded-[40px] shadow-xl bg-white flex flex-col justify-center items-center'>
                    <img src="./src/assets/burger.svg" alt="" />
                    <h3 className='text-[30px] font-semibold text-[#1E1E1E] text-center mt-[13px]'>Main Dish</h3>
                    <p className='text-[22px] font-medium text-[#555555] text-center mt-[12px]'>(86 dishes)</p>
                </div>
                <div className='w-[326px] h-[326px] rounded-[40px] shadow-xl bg-white flex flex-col justify-center items-center'>
                    <img src="./src/assets/sandwich.svg" alt="" />
                    <h3 className='text-[30px] font-semibold text-[#1E1E1E] text-center mt-[13px]'>Break Fast</h3>
                    <p className='text-[22px] font-medium text-[#555555] text-center mt-[12px]'>(12 break fast)</p>
                </div>
                <div className='w-[326px] h-[326px] rounded-[40px] shadow-xl bg-white flex flex-col justify-center items-center'>
                    <img src="./src/assets/dessert.svg" alt="" />
                    <h3 className='text-[30px] font-semibold text-[#1E1E1E] text-center mt-[13px]'>Dessert</h3>
                    <p className='text-[22px] font-medium text-[#555555] text-center mt-[12px]'>(48 dessert)</p>
                </div>
                <div className='w-[326px] h-[326px] rounded-[40px] shadow-xl bg-white flex flex-col justify-center items-center'>
                    <img src="./src/assets/juice.svg" alt="" />
                    <h3 className='text-[30px] font-semibold text-[#1E1E1E] text-center mt-[13px]'>Browse All</h3>
                    <p className='text-[22px] font-medium text-[#555555] text-center mt-[12px]'>(255 Items)</p>
                </div>
            </div>
        </div>
    )
}

export default Categories