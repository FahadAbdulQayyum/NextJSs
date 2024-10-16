"use client"

import cssStyle from './button.module.css'
import { IoIosArrowUp } from 'react-icons/io'

const CustomButton = ({ children, disabled, subNav, sub, btn }: any) => {

    return (
        <div
            // --
            className={`p-2 text-yellow-50 ${!disabled ? 'hover:border-b-2 hover:border-t-2 hover:border-t-transparent hover:pt-[5px]' : ''} hover:cursor-pointer duration-1000 translate-x-1 flex items-center ${cssStyle.fahad} ${subNav ? 'space-x-1 hover:pb-48' : ''} ${cssStyle.show} ${btn && 'bg-blue-400 rounded-lg px-5 font-bold hover:bg-orange-950'}`}
        // className={`p-2 text-yellow-50 ${!disabled ? 'hover:border-b-2 hover:border-t-2 hover:border-t-transparent hover:pt-[5px]' : ''} hover:cursor-pointer duration-1000 translate-x-1 flex items-center ${cssStyle.fahad} ${subNav ? 'space-x-1' : ''} ${cssStyle.show} ${btn && 'bg-blue-400 rounded-lg px-5 font-bold hover:bg-orange-950'} hover:pb-48`}
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
                className={`fixed top-9 -left-4 flex flex-col ${cssStyle.exacthidemobile} space-y-2  `}
            >{sub.map((v: any) => <span
                className="hover:bg-slate-700 px-5 p-2 duration-500"
            >{v.name}</span>)}</div>}
        </div >
    )
}

export default CustomButton
