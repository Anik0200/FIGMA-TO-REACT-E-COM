import React from 'react'

const CmnTitle = ({ title }) => {
    return (
        <>
            <h2 className='font-poppins font-bold lg:text-[32px] md:text-[28px] text-[22px] text-txtPrimary'>
                {title}
            </h2>
        </>
    )
}

export default CmnTitle
