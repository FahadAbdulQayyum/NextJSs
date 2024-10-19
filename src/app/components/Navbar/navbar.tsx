import React from 'react'
import DesktopNavbar from './desktopNavbar'
import MobileNavbar from './mobileNavbar'

const Navbar = () => {
    return (
        <div>
            <span className="hidden lg:block ">
                <DesktopNavbar />
            </span>
            <span className="lg:hidden">
                <MobileNavbar />
            </span>
        </div>
    )
}

export default Navbar
