import React, { useEffect } from 'react'
import NavBar from '../NavBar/NavBar'
import { Outlet } from 'react-router'
import SideBar from '../SideBar/SideBar'
import Footer from '../Footer/Footer'

const LayOut = () => {

    const [show, setShow] = React.useState(false)

    let handleShow = () => {
        setShow(true)
        document.body.style.overflow = 'hidden'
    }

    let handleCross = () => {
        setShow(false)
        document.body.style.overflow = 'unset'
    }

    return (
        <>
            <NavBar barOnclick={handleShow} crossOnclick={handleCross} show={show} />
            <SideBar show={show} />
            <Outlet />
            <Footer/>
        </>
    )
}

export default LayOut
