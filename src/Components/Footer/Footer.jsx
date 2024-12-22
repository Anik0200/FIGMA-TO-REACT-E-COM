import React from 'react'
import './Footer.css'
import { Link } from 'react-router'

const Footer = () => {
    return (
        <>
            <footer>
                <div className="container">

                    <div className='footer-main flex'>

                        <div className="logo">
                            <img src="/logo.png" alt="" />
                            <p className='font-poppins font-normal text-txtSecondary'>
                                400 University Drive Suite 200 Coral Gables,
                                FL 33134 USA
                            </p>
                        </div>

                        <ul className='hidden lg:flex gap-[144px]'>
                            <div className="menu flex flex-col">
                                <li><Link>Links</Link></li>
                                <li><Link to={'/'}>Home</Link></li>
                                <li><Link to={'/shop'}>Shop</Link></li>
                                <li><Link>About</Link></li>
                                <li><Link>Contact</Link></li>
                            </div>

                            <div className="menu flex flex-col">
                                <li><Link>Help</Link></li>
                                <li><Link>Payment Options</Link></li>
                                <li><Link>Returns</Link></li>
                                <li><Link>Privacy Policies</Link></li>
                            </div>
                        </ul>

                        <div className="news-letter">
                            <p className='font-poppins font-medium  text-txtSecondary'>Newsletter</p>

                            <input className='border-b-[1px] border-solid border-black focus:outline-none focus:ring-0 pb-[4px]'
                                type="text" placeholder='Enter Your Email Address' />

                            <button className='font-poppins font-medium text-txtPrimary uppercase border-b-[1px] border-solid border-black
                                     pb-[2.2px]'>
                                Subscribe
                            </button>
                        </div>

                    </div>

                    <div className="copyright border-t-[1px] border-txtSecondary">
                        <p className='font-poppins font-medium text-txtPrimary text-[16px]'>
                            2023 furino. All rights reverved
                        </p>
                    </div>

                </div>
            </footer>
        </>
    )
}

export default Footer
