import React from 'react'
import './HomeBanner.css'

const HomeBanner = () => {
    return (
        <>
            <section className='homeBanner bg-[url("/homeBackGround.png")] bg-cover bg-center'>
                <div className="container flex md:justify-end justify-center">
                    <div className="text-main bg-bgPrimary">

                        <h2 className='font-poppins font-semibold text-txtPrimary'>
                            New Arrival
                        </h2>
                        <h1 className='font-poppins font-bold text-brand'>
                            Discover Our New Collection
                        </h1>
                        <p className='font-poppins font-medium text-txtSecondary'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
                        </p>
                        <button className='bg-brand text-[#FFFFFF] font-poppins font-bold uppercase'>
                            BUY Now
                        </button>

                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeBanner
