import React from 'react'
import './OurProducts.css'
import CmnTitle from '../Common/CmnTitle'
import CmnProducts from '../Common/CmnProducts'
import CmnBtn from '../Common/CmnBtn'


const OurProducts = () => {
    return (
        <>
            <section className='ourProducts'>
                <div className="container">

                    <div className="title text-center">
                        <CmnTitle title={'Our Products'} />
                    </div>

                    <div className="products grid">
                        <CmnProducts image={'/product_1.png'} title={'Syltherine'} subTitle={'Stylish cafe chair'} price={'Rp 2.500.000'} priceSub={'Rp 3.500.000'} />
                        <CmnProducts image={'/product_2.png'} title={'Syltherine'} subTitle={'Stylish cafe chair'} price={'Rp 2.500.000'} priceSub={'Rp 3.500.000'} />
                        <CmnProducts image={'/product_3.png'} title={'Syltherine'} subTitle={'Stylish cafe chair'} price={'Rp 2.500.000'} priceSub={'Rp 3.500.000'} />
                        <CmnProducts image={'/product_4.png'} title={'Syltherine'} subTitle={'Stylish cafe chair'} price={'Rp 2.500.000'} priceSub={'Rp 3.500.000'} />
                    </div>

                    <div className="button flex justify-center">
                        <CmnBtn content={'View All'} />
                    </div>

                </div>
            </section>
        </>
    )
}

export default OurProducts
