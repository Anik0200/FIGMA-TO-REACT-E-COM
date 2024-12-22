import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { Link, useLocation } from 'react-router';

const BreadCrumb = () => {

    const location = useLocation();
    const path = location.pathname.split("/")[1];

    return (
        <>
            <ul className='flex items-center font-poppins font-medium
                           md:gap-[6px] gap-[3px] md:text-[16px] text-[12px]'>
                <li className='text-txtPrimary'><Link to={'/'}>Home</Link></li>
                <li className='text-txtPrimary'><IoIosArrowForward /></li>
                <li className='text-txtSecondary'><Link>{path}</Link></li>
            </ul>
        </>
    )
}

export default BreadCrumb
