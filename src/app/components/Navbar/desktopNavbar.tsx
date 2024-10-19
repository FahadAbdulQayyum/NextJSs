import React from 'react'
import CustomButton from '../Button/button'
import Image from 'next/image'
// import Logo from '../../assets/flogo.png'
import Logo from '../../assets/logo_0.png'

const DesktopNavbar = () => {
    return (
        <div
            className="px-6 bg-slate-500 py-2 text-sm flex items-center justify-between"
        >
            <span>
                <CustomButton disabled={true}>
                    <Image src={Logo} alt="logo" width={90} height={90} />
                </CustomButton>
            </span>
            <span
                className="flex space-x-5"
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
                <CustomButton subNav={true} desktop={true} sub={[{
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
            <span>
                <CustomButton btn={true}>
                    <a href="/">Login</a>
                </CustomButton>
            </span>
        </div >
    )
}

export default DesktopNavbar
