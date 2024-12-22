import React from 'react'
import { IoIosArrowForward } from "react-icons/io";

const NextArrow = ({ onClick }) => {

    return (
        <>
            <div onClick={onClick}

                className='text-brand bg-[#FFFFFF] flex justify-center items-center rounded-full

                absolute -translate-y-1/2 md:top-1/2

                bottom-[100px] md:bottom-0

                lg:right-[-15px] md:right-0 right-[-10px]

                lg:w-[48px] md:w-[38px] w-[28px]

                lg:h-[48px] md:h-[38px] h-[28px]'>

                <IoIosArrowForward />
            </div>
        </>
    )
}

export default NextArrow
