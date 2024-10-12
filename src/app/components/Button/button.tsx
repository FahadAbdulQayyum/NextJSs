// "use client"
// import cssStyle from './button.module.css'
// import { IoIosArrowUp } from 'react-icons/io'

// const CustomButton = ({ children, disabled, subNav, sub }: any) => {
//     return (
//         <div
//             className={`relative p-2 text-yellow-50 ${!disabled ? 'hover:border-b-2 hover:border-t-2 hover:border-t-transparent hover:pt-[5px]' : ''} hover:cursor-pointer duration-300 translate-x-1 flex items-center ${cssStyle.fahad} ${subNav ? 'space-x-1' : ''}`}
//         >
//             {children}
//             <span
//             className={cssStyle.show}
//             >
//                 {subNav && (
//                     <span className={cssStyle.rotate}>
//                         <IoIosArrowUp />
//                     </span>
//                 )}
//                 {sub && sub.length > 0 && (
//                     // <div className="absolute left-0 flex group-hover:flex flex-col bg-gray-800 rounded shadow-lg">
//                     <div
//                         // className="absolute top-10 flex group-hover:flex flex-col bg-gray-800 rounded shadow-lg"
//                         // className={`absolute top-10 flex group-hover:flex flex-col bg-gray-800 rounded shadow-lg ${cssStyle.show}`}
//                         className={`absolute top-10 flex group-hover:flex flex-col bg-gray-800 rounded shadow-lg`}
//                     >
//                         {sub.map((v: any, index: number) => (
//                             <span key={index} className="p-2 text-yellow-50 hover:bg-gray-700">{v.name}</span>
//                         ))}
//                     </div>
//                 )}
//             </span>

//         </div >
//     )
// }

// export default CustomButton
















// "use client"
// import cssStyle from './button.module.css'
// import { IoIosArrowUp } from 'react-icons/io'

// const CustomButton = ({ children, disabled, subNav, sub }: any) => {
//     return (
//         <div
//             className={`relative p-2 text-yellow-50 ${!disabled ? 'hover:border-b-2 hover:border-t-2 hover:border-t-transparent hover:pt-[5px]' : ''} hover:cursor-pointer duration-300 translate-x-1 flex items-center ${cssStyle.fahad} ${subNav ? 'space-x-1' : ''}`}
//         >
//             {children}
//             {subNav && (
//                 <span className={cssStyle.rotate}>
//                     <IoIosArrowUp />
//                 </span>
//             )}
//             {sub && (
//                 <div className="absolute left-0 hidden group-hover:flex flex-col bg-gray-800 rounded shadow-lg">
//                     {
//                         sub.map((v: any, index: number) => (
//                             <span key={index} className="p-2 text-yellow-50 hover:bg-gray-700">{v.name}</span>
//                         ))
//                     }
//                 </div>
//             )
//             }
//         </div >
//     )
// }

// export default CustomButton








"use client"
import cssStyle from './button.module.css'
import { IoIosArrowUp } from 'react-icons/io'

const CustomButton = ({ children, disabled, subNav, sub }: any) => {

    console.log('children...', children)

    return (
        <div
            // className={`p-2 text-yellow-50 ${!disabled ? 'hover:border-b-2 hover:border-t-2 hover:border-t-transparent hover:pt-[5px]' : ''} hover:cursor-pointer duration-300 translate-x-1 flex items-center ${cssStyle.fahad} ${subNav ? 'space-x-1' : ''} ${sub ? 'hidden hover:block' : ''}`}
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
