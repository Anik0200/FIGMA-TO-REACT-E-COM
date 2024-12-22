import React from 'react'
import ShopBanner from '../Components/ShopBanner/ShopBanner'
import Filter from '../Components/Filter/Filter'
import Products from '../Components/Products/Products'

const Shop = () => {
    return (
        <>
            <ShopBanner />
            <Filter />
            <Products itemsPerPage={8} />
        </>
    )
}

export default Shop
