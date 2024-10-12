// "use client"
// import { IoIosArrowUp } from 'react-icons/io'
// import cssStyle from './button.module.css'

// const CustomButton = ({ children, disabled, subNav, sub }: any) => {
//     return (
//         <div
//             className={`relative p-2 text-yellow-50 ${!disabled ? 'hover:border-b-2 hover:border-t-2 hover:border-t-transparent hover:pt-[5px]' : ''} hover:cursor-pointer duration-300 flex items-center ${subNav ? 'group' : ''}`}
//         >
//             {children}
//             {subNav && (
//                 <span className={`${cssStyle.rotate} ml-2`}>
//                     <IoIosArrowUp />
//                 </span>
//             )}
//             {sub && (
//                 <div className="absolute left-0 hidden group-hover:flex flex-col bg-gray-800 rounded shadow-lg mt-2 space-y-1 z-10">
//                     {sub.map((v: any, index: number) => (
//                         <a key={index} href={v.link} className="p-2 text-yellow-50 hover:bg-gray-700">
//                             {v.name}
//                         </a>
//                     ))}
//                 </div>
//             )}
//         </div>
//     )
// }

// export default CustomButton














import React from 'react'
import CustomButton from '../Button/button'
import Image from 'next/image'
import Logo from '../../assets/flogo.png'
import cssStyle from '../Button/button.module.css'

const Navbar = () => {
    return (
        <div
            className="bg-slate-500 py-2 text-sm flex items-center justify-between"
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
                <CustomButton subNav={true} sub={[{ name: 'Service0', link: '/services0' }, { name: 'Service1', link: '/services1' }, { name: 'Service2', link: '/services2' }, { name: 'Service0', link: '/services0' }]}
                // className={cssStyle.show}
                >
                    <a href="/services">Service</a>
                    {/* <CustomButton subNav={true} sub={true}>
                        <a href="/services">Service0</a>
                    </CustomButton>
                    <CustomButton subNav={true} sub={true}>
                        <a href="/services">Service1</a>
                    </CustomButton>
                    <CustomButton subNav={true} sub={true}>
                        <a href="/services">Service2</a>
                    </CustomButton> */}
                </CustomButton>
                <CustomButton>
                    <a href="/contact">More</a>
                </CustomButton>
            </span>
            <span>
                <CustomButton>
                    <a href="/">Login</a>
                </CustomButton>
            </span>
        </div >
    )
}

export default Navbar
