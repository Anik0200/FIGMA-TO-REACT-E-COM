import React from 'react'
import './NavBar.css';
import { Link } from 'react-router';
import { MdOutlinePeopleOutline } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const NavBar = ({ barOnclick, crossOnclick, show }) => {


    return (
        <>
            <nav className="navOne">
                <div className="container">
                    <div className="nav-main">

                        <div className="logo">
                            <img src="/logo.png" alt="logo" />
                        </div>

                        <ul className='menu '>
                            <li><Link to={'/'}>Home</Link></li>
                            <li><Link to={'/shop'}>Shop</Link></li>
                            <li><Link>About</Link></li>
                            <li><Link>Contact</Link></li>
                        </ul>

                        <div className="icons">
                            <Link to={'/'} /> <MdOutlinePeopleOutline />
                            <Link to={'/'} /> <CiSearch />
                            <Link to={'/'} /> <CiHeart />
                            <Link to={'/'} /> <CiShoppingCart />
                        </div>

                        {
                            show == true ?
                                <ImCross onClick={crossOnclick} className='block lg:hidden ml-[20px] md:ml-0 text-[20px]' />
                                :
                                <FaBars onClick={barOnclick} className='block lg:hidden ml-[20px] md:ml-0 text-[20px]' />
                        }

                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar
