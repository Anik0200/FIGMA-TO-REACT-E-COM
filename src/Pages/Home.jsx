import React from 'react'
import HomeBanner from '../Components/HomeBanner/HomeBanner'
import Browse from '../Components/Browse/Browse'
import OurProducts from '../Components/OurProducts/OurProducts'
import Explore from '../Components/Explore/Explore'

const Home = () => {
    return (
        <>
            <HomeBanner />
            <Browse />
            <OurProducts />
            <Explore />
        </>
    )
}

export default Home
