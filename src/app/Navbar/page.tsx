"use client"

import Link from 'next/link';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import LogoLink from './LogoLink';
import DesktopNavLinks from './DesktopNavLinks'
import MobileMenuButton from './MobileMenuButton'
import MobileDrawer from './MobileDrawer'


const Navbar = () => {

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const handleDrawerToggle = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    return (
        <>
            <div className="hidden relative py-6 sm:flex flex-col justify-center bg-slate-500">
                <LogoLink />
                <DesktopNavLinks />
            </div>
            <div className="sm:hidden relative flex flex-row my-4">
                <LogoLink />
                <MobileMenuButton onClick={handleDrawerToggle} />
                <MobileDrawer isOpen={isDrawerOpen} onClose={handleDrawerToggle} />
            </div>
        </>
    );
}


export default Navbar;