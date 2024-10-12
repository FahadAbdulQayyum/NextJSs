"use client"
import React, { useState } from 'react'
import cssStyle from './button.module.css'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

const CustomButton = ({ children, disabled, subNav }: any) => {
    const [direction, setDirection] = useState(false)

    const handleHover = () => {
        setDirection(true)
    }

    const rehandleHover = () => {
        setDirection(false)
    }

    return (
        <div
            // className="p-2 text-yellow-50 hover:border-b-2 hover:border-t-2 hover:border-t-transparent hover:pt-[5px] hover:cursor-pointer duration-300 translate-x-1"
            // className={`p-2 text-yellow-50 ${!disabled ? 'hover:border-b-2 hover:border-t-2 hover:border-t-transparent hover:pt-[5px]' : ''} hover:cursor-pointer duration-300 translate-x-1 flex items-center`}
            className={`p-2 text-yellow-50 ${!disabled ? 'hover:border-b-2 hover:border-t-2 hover:border-t-transparent hover:pt-[5px]' : ''} hover:cursor-pointer duration-300 translate-x-1 flex items-center ${cssStyle.fahad}`}
        // className={`p-2 text-yellow-50 ${!disabled ? 'hover:border-b-2 hover:border-t-2 hover:border-t-transparent hover:pt-[5px]' : ''} hover:cursor-pointer duration-300 translate-x-1 flex items-center ${subNav ? 'space-x-1' : ''} hover:${direction} duration-1000`}
        // onMouseEnter={handleHover}
        // onMouseLeave={rehandleHover}
        >
            {children}
            {/* {subNav && (direction ? <IoIosArrowDown /> : <IoIosArrowUp />)} */}
            {subNav &&
                <span
                    className={cssStyle.rotate}
                >
                    <IoIosArrowDown />
                </span>
            }
        </div >
    )
}

export default CustomButton
