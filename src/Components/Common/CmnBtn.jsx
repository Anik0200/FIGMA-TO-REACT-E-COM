import React from 'react'
import { Link } from 'react-router'

const CmnBtn = ({ content }) => {
    return (
        <>
            <Link className='font-poppins font-semibold border-[2px] border-solid border-brand text-brand text-[16px]
             lg:px-[74px] md:px-[60px] px-[40px] md:py-[12px] py-[8px]  hover:border-transparent hover:bg-brand hover:text-white hover:animate-pulse'>
                {content}
            </Link>
        </>
    )
}

export default CmnBtn
