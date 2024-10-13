"use client"

import cssStyle from './button.module.css'
import { IoIosArrowUp } from 'react-icons/io'

const CustomButton = ({ children, disabled, subNav, sub }: any) => {

    return (
        <div
            className={`p-2 text-yellow-50 ${!disabled ? 'hover:border-b-2 hover:border-t-2 hover:border-t-transparent hover:pt-[5px]' : ''} hover:cursor-pointer duration-300 translate-x-1 flex items-center ${cssStyle.fahad} ${subNav ? 'space-x-1' : ''} ${cssStyle.show}`}
        >
            {children}
            {subNav &&
                <span
                    className={cssStyle.rotate}
                >
                    <IoIosArrowUp />
                </span>
            }
            {sub && <div
                className={`fixed top-10 flex flex-col ${cssStyle.exacthide}`}
            >{sub.map((v: any) => <span>{v.name}</span>)}</div>}
        </div >
    )
}

export default CustomButton
