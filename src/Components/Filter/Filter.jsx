import React from 'react'
import './Filter.css';
import { RiEqualizerLine } from "react-icons/ri";

const Filter = () => {
    return (
        <>
            <section className='filter bg-bgPrimary'>
                <div className="container">

                    <div className="filter-main flex">
                        <div className="first flex items-center">
                            <div className="equalizer flex items-center font-poppins font-normal text-txtPrimary">
                                <RiEqualizerLine />
                                <span>Filter</span>
                            </div>

                            <div className="reasult font-poppins font-normal text-txtPrimary border-l border-txtSecondary">
                                <p>Showing 1–16 of 32 results</p>
                            </div>
                        </div>

                        <div className="second flex gap-[30px]">
                            <div className="input-one flex items-center">
                                <p className='font-poppins font-normal text-txtPrimary lg:text-[20px] text-[16px]'>Show</p>
                                <input className='font-poppins font-normal text-txtSecondary focus:outline-none' defaultValue={16} />
                            </div>


                            <div className="input-two flex items-center">
                                <p className='font-poppins font-normal text-txtPrimary lg:text-[20px] text-[16px]'>Short by</p>
                                <input className='font-poppins font-normal text-txtSecondary focus:outline-none' defaultValue={16} />
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Filter
