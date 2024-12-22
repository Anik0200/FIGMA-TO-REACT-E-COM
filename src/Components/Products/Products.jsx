import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import './Products.css'
import CmnProducts from '../Common/CmnProducts';




const Products = ({ itemsPerPage }) => {

    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items.length / itemsPerPage);


    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

    return (
        <>
            <section className='products'>
                <div className="container">
                    <div className="products-main grid">
                        {currentItems &&
                            currentItems.map((item, index) => (
                                <CmnProducts key={index} image={'/product_1.png'}
                                    title={'Syltherine'}
                                    subTitle={'Stylish cafe chair'}
                                    price={'Rp 2.500.000'}
                                    priceSub={'Rp 3.500.000'} />
                            ))}
                    </div>

                    <ReactPaginate
                        breakLabel="..."
                        nextLabel="next"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={5}
                        pageCount={pageCount}
                        renderOnZeroPageCount={null}
                        className='flex justify-center capitalize  pagination'
                    />
                </div>
            </section>
        </>
    )
}

export default Products
