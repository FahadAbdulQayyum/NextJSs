"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const navItems = [
    {
        path: "/",
        name: "Home",
    },
    {
        path: "/now",
        name: "Now",
    },
    {
        path: "/guestbook",
        name: "Guestbook",
    },
    {
        path: "/writing",
        name: "Writing",
    },
];

export default function NavBar() {
    let pathname = usePathname() || "/";

    return (
        <div className="border border-stone-800/90 p-[0.4rem] rounded-lg mb-12 sticky top-4 z-[100] bg-stone-900/80 backdrop-blur-md">
            <nav className="flex gap-2 relative justify-start w-full z-[100]  rounded-lg">
                {navItems.map((item, index) => {
                    const isActive = item.path === pathname;

                    return (
                        <Link
                            key={item.path}
                            className={`px-4 py-2 rounded-md text-sm lg:text-base relative no-underline duration-300 ease-in ${isActive ? "text-zinc-100" : "text-zinc-400"
                                }`}
                            href={item.path}
                        >
                            <span>{item.name}</span>
                        </Link>
                    );
                })}
            </nav>
        </div>
    );
}







// import Link from 'next/link';

// const Navbar = () => {
//     return (
//         <div
//             className="bg-slate-800 flex flex-cols justify-between"
//         >
//             <div>logo</div>
//             <ul
//                 className="flex flex-cols space-x-4"
//             >
//                 <li>
//                     <Link href='/Home'>Home</Link>
//                 </li>
//                 <li>
//                     <Link href='/AboutUs'>About Us</Link>
//                 </li>
//                 <li>
//                     <Link href='/ContactUs'>Contact Us</Link>
//                 </li>
//             </ul>
//             <div>
//             </div>
//             <div>
//                 Emburgur
//             </div>
//         </div>
//     )
// }

// export default Navbar
