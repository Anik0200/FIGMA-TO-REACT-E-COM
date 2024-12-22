import React, { useState } from 'react';
import './ProductInfo.css';

const ProductInfo = () => {

    const [activeTab, setActiveTab] = useState("Tab1");

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <>
            <section className='productInfo  py-14'>
                <div className="container">

                    <div className='productInfo-main flex flex-col items-center'>

                        <div className='productInfo-tabs flex cursor-pointer'>

                            <div onClick={() => handleTabClick("Tab1")}

                                className={`${activeTab === "Tab1" ? "text-txtPrimary" : "text-txtSecondary"} tab`}>

                                Description
                            </div>

                            <div onClick={() => handleTabClick("Tab2")}

                                className={`${activeTab === "Tab2" ? "text-txtPrimary" : "text-txtSecondary"} tab`}>

                                Information
                            </div>

                            <div onClick={() => handleTabClick("Tab3")}

                                className={`${activeTab === "Tab3" ? "text-txtPrimary" : "text-txtSecondary"} tab`}>

                                Reviews
                            </div>

                        </div>

                        <div>
                            {activeTab === "Tab1" && <div className='tab-content w-full font-poppins font-normal text-txtSecondary'>
                                the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall.
                            </div>}

                            {activeTab === "Tab2" && <div className='tab-content w-full font-poppins font-normal text-txtSecondary'>
                                unplugs the chords, and takes the show on the road.
                            </div>}

                            {activeTab === "Tab3" && <div className='tab-content w-full font-poppins font-normal text-txtSecondary'>
                                Embodying the raw, wayward spirit of rock
                            </div>}
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default ProductInfo
