import React from 'react'
import './CmnProducts.css'
import CmnBtn from './CmnBtn'
import { Link } from 'react-router'

const CmnProducts = ({ title, subTitle, price, priceSub, image }) => {
    return (
        <>
            <Link to={'/details'}>
                <div className="product-item relative">
                    <img src={image} className='w-full' alt="" />
                    <div className="texts bg-[#F4F5F7]">
                        <h2 className='product-title text-txtPrimary font-poppins font-semibold'>{title}</h2>

                        <p className='product-subTtitle text-txtSecondary font-poppins font-medium'>{subTitle}</p>

                        <div className="price flex justify-between">
                            <h2 className='price-main text-txtPrimary font-poppins font-semibold'>{price}</h2>

                            <p className='price-sub text-txtSecondary font-poppins font-normal line-through'>{priceSub}</p>
                        </div>
                    </div>

                    <div className="overlay flex justify-center items-center">
                        <CmnBtn content={'Add To Cart'} />
                    </div>
                </div>
            </Link>
        </>
    )
}

export default CmnProducts
