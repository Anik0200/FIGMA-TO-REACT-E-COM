import React from 'react'

const CmnSubtitle = ({ subTitle }) => {
    return (
        <>
            <p className='font-poppins font-normal lg:text-[20px] md:text-[15] text-[10] text-txtSecondary'>
                {subTitle}
            </p>
        </>
    )
}

export default CmnSubtitle
