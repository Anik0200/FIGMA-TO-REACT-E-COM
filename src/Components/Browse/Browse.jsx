import React from 'react'
import './Browse.css';
import CmnTitle from '../Common/CmnTitle';
import CmnSubtitle from '../Common/CmnSubtitle';

const Browse = () => {
    return (
        <>
            <section className='browse'>
                <div className="container">

                    <div className="title text-center">
                        <CmnTitle title={'Browse The Range'} />
                        <CmnSubtitle subTitle={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'} />
                    </div>


                    <div className="items flex">

                        <div className="item text-center">
                            <img src="/dining.png" className='w-full' alt="" />
                            <p className='font-poppins font-semibold text-[24px] text-txtPrimary'>Dining</p>
                        </div>

                        <div className="item text-center">
                            <img src="/living.png" className='w-full' alt="" />
                            <p className='font-poppins font-semibold text-[24px] text-txtPrimary'>Dining</p>
                        </div>

                        <div className="item text-center">
                            <img src="/bed.png" className='w-full' alt="" />
                            <p className='font-poppins font-semibold text-[24px] text-txtPrimary'>Dining</p>
                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}

export default Browse
