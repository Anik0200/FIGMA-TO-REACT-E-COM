import React from 'react'
import './Explore.css'
import CmnBtn from '../Common/CmnBtn'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import NextArrow from './NextArrow';

const Explore = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <span></span>
    };

    return (
        <>
            <section className='explore bg-bgPrimary'>
                <div className="container flex flex-col lg:flex-row items-center gap-[42px]">

                    <div className="texts">
                        <h2 className='font-poppins font-bold text-txtPrimary'>
                            50+ Beautiful rooms
                            inspiration
                        </h2>
                        <p className='font-poppins font-medium text-txtPrimary'>
                            Our designer already made a lot of beautiful prototipe of rooms that inspire you
                        </p>
                        <CmnBtn content={'Explore Now'} />
                    </div>


                    <div className="slider">

                        <Slider {...settings}>
                            <div className='slide_items'>
                                <img src="/slider_1.png" className='w-full h-full' alt="" />
                            </div>
                            <div className='slide_items'>
                                <img src="/slider_2.png" className='w-full h-full' alt="" />
                            </div>
                            <div className='slide_items'>
                                <img src="/slider_3.png" className='w-full h-full' alt="" />
                            </div>
                        </Slider>

                    </div>

                </div>
            </section>
        </>
    )
}

export default Explore
