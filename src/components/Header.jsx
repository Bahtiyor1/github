import React from 'react';

const Header = () => {
    return (
        <div className='flex justify-between items-center mx-[150px] pt-[50px]'>
            <div>
                <img src="./src/assets/logo.svg" alt="" />
            </div>
            <div>
                <ul className='flex gap-[60px]'>
                    <li className='font-medium text-[20px] text-[#39DB4A] font-[Poppins]'>Home</li>
                    <li className='flex items-center font-medium text-[20px] gap-[13px] font-[Poppins] text-[#272727]'>Menu <img src="./src/assets/down.svg" alt="" /></li>
                    <li className='flex items-center font-medium text-[20px] gap-[13px] font-[Poppins] text-[#272727]'>Services <img src="./src/assets/down.svg" alt="" /></li>
                    <li className='flex items-center font-medium text-[20px] gap-[13px] font-[Poppins] text-[#272727]'>Offers</li>
                </ul>
            </div>
            <div className='flex items-center gap-[51px]'>
                <img src="./src/assets/search.svg" alt="" />
                <button className='bg-[#39DB4A] text-white text-[20px] font-[Poppins] flex items-center gap-[14px] rounded-[40px] w-[180px] h-[60px] justify-center'><img src="./src/assets/contact.svg" alt="" />Contact</button>
            </div>
        </div>
    );
};

export default Header;