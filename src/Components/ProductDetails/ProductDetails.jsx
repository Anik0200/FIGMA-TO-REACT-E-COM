import React, { useRef, useState } from 'react';
import './ProductDetails.css';
import { FaStar } from "react-icons/fa";
import { FaRegStarHalf } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";


const ProductDetails = () => {

    const [images, setImages] = useState({
        img1: "/product_1.png",
        img2: "/product_2.png",
        img3: "/product_3.png",
        img4: "/product_4.png"
    });

    const [activeImg, setActiveImg] = useState(images.img1);

    const [quantity, setQuantity] = useState(1);

    if (quantity < 1) {
        setQuantity(1)
    }


    return (
        <>
            <section className='productDetails'>
                <div className="container">
                    <div className="productDetails-main flex">

                        <div className="first flex">
                            <div className="slider-normal flex">
                                <div className='images overflow-hidden cursor-pointer' onClick={() => setActiveImg(images.img1)}>
                                    <img src={images.img1} alt="" />
                                </div>
                                <div className='images overflow-hidden cursor-pointer' onClick={() => setActiveImg(images.img2)}>
                                    <img src={images.img2} alt="" />
                                </div>
                                <div className='images overflow-hidden cursor-pointer' onClick={() => setActiveImg(images.img3)}>
                                    <img src={images.img3} alt="" />
                                </div>
                            </div>

                            <div className="slider-main overflow-hidden">
                                <img src={activeImg} className='w-full' alt="" />
                            </div>
                        </div>

                        <div className="second">
                            <h2 className='titlte font-poppins font-normal text-txtPrimary'>
                                Asgaard sofa
                            </h2>

                            <p className='subTitlte font-poppins font-medium text-txtSecondary'>
                                Rs. 250,000.00
                            </p>

                            <div className="review flex">
                                <div className="stars flex text-brand">
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaRegStarHalf />
                                </div>
                                <p className='customer-review font-poppins font-normal text-txtSecondary border-l border-txtSecondary'>
                                    5 Customer Review
                                </p>
                            </div>

                            <p className='description font-poppins font-normal text-txtPrimary'>
                                Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.
                            </p>

                            <div className="size">
                                <p className='size-title font-poppins font-normal text-txtSecondary'>Size</p>
                                <div className="options flex">
                                    <option className='bg-brand text-white' value="">L</option>
                                    <option className='bg-brand text-white' value="">XL</option>
                                    <option className='bg-brand text-white' value="">XS</option>
                                </div>
                            </div>

                            <div className="color">
                                <p className='color-title font-poppins font-normal text-txtSecondary'>Color</p>
                                <div className="colors flex">
                                    <option className='bg-[#816DFA] rounded-full' value=""></option>
                                    <option className='bg-[#000000] rounded-full' value=""></option>
                                    <option className='bg-[#B88E2F] rounded-full' value=""></option>
                                </div>
                            </div>

                            <div className="buttons flex ">

                                <div className="qty flex items-center font-poppins font-medium text-txtPrimary border-txtSecondary">
                                    <FaMinus onClick={() => setQuantity(quantity - 1)} />
                                    <p>{quantity}</p>
                                    <FaPlus onClick={() => setQuantity(quantity + 1)} />
                                </div>

                                <button className='cart border-txtPrimary font-poppins font-normal'>
                                    Add To Cart
                                </button>

                                <button className='compare flex items-center justify-center border-txtPrimary font-poppins font-normal'>
                                    <FaPlus />
                                    Compare
                                </button>
                            </div>

                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default ProductDetails
