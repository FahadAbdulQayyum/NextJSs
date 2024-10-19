"use client"

import React, { useState } from 'react'
import CustomButton from '../Button/button'
import Image from 'next/image'
// import Logo from '../../assets/flogo.png'
import Logo from '../../assets/logo_0.png'

const MobileNavbar = () => {

    const [btnState, setBtnState] = useState(false)

    // const onClickFunction = (m: any) => {
    const onClickFunction = () => {
        // console.log('m...', m)
        setBtnState(!btnState)
        console.log('btnState...', btnState)
    }

    return (
        <div
            className="bg-slate-500 py-2 text-sm flex flex-col items-center justify-between"
        >
            <span
                className="flex justify-between items-center w-full px-6"
            >
                <span>
                    <CustomButton disabled={true}>
                        <Image src={Logo} alt="logo" width={90} height={90} />
                    </CustomButton>
                </span>
                <span>
                    <CustomButton btn={true}
                        open={true}
                        // onClickFunction={onClickFunction}
                        onClickFunction={onClickFunction}
                        btnState={btnState}
                    >
                        {/* <a href="/">Login</a> */}
                        X
                    </CustomButton>
                </span>
            </span>
            <span
                // className="flex flex-col space-y-5"
                className={`${btnState ? 'duration-1000 -translate-y-80 -space-y-10' : 'flex flex-col space-y-5 '}`}
            // className={`${btnState ? 'hidden' : 'flex flex-col space-y-5 '}`}
            >
                <CustomButton>
                    <a href="/">Home</a>
                </CustomButton>
                <CustomButton>
                    <a href="/about">About</a>
                </CustomButton>
                <CustomButton>
                    <a href="/contact">Contact</a>
                </CustomButton>
                <CustomButton subNav={true} sub={[{
                    name: 'Service0', link: '/services0', subsub: [{
                        name: 'Service0', link: '/services0',
                    }, {
                        name: 'Service0', link: '/services0',
                    }]
                }, { name: 'Service1', link: '/services1' }, { name: 'Service2', link: '/services2' }, { name: 'Service0', link: '/services0' }]}>
                    <a href="/services">Service</a>
                </CustomButton>
                <CustomButton>
                    <a href="/contact">More</a>
                </CustomButton>
            </span>
            <span
                // className="md:hidden"
                className={`${btnState ? 'hidden' : ''}`}
            >
                <CustomButton btn={true}>
                    <a href="/">Login</a>
                </CustomButton>
            </span>
        </div >
    )
}

export default MobileNavbar
