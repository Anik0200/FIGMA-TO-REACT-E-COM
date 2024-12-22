import React from 'react'
import './ShopBanner.css';
import BreadCrumb from '../Common/BreadCrumb';

const ShopBanner = () => {
    return (
        <>
            <section className='shopBanner  bg-[url("/shopBanner.png")] bg-cover bg-center'>
                <div className="container">

                    <div className="text flex flex-col items-center">
                        <h2 className='font-poppins font-medium text-txtPrimary mb-[2px]'>Shop</h2>
                        <BreadCrumb />
                    </div>

                </div>
            </section>
        </>
    )
}

export default ShopBanner
