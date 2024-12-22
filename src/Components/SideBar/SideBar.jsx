import React from 'react'
import './SideBar.css'
import { Link } from 'react-router'

const SideBar = ({ show }) => {
    return (
        <>
            <nav className={`${show ? 'block' : 'hidden'} sidebar`}>

                <ul className='menu'>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/shop'}>Shop</Link></li>
                    <li><Link>About</Link></li>
                    <li><Link>Contact</Link></li>
                </ul>

            </nav>
        </>
    )
}

export default SideBar
