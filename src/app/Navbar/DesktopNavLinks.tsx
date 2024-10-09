import Link from 'next/link';
function DesktopNavLinks() {
    return (
        // <ul className="absolute right-0 flex flex-row space-x-6">
        <ul className="absolute right-0 flex flex-row space-x-1">
            <li className="text-xl hover:bg-slate-800 hover:text-white w-28 text-center p-[6.5px] hover:transition-opacity duration-500 hover:cursor-pointer rounded-md">
                <Link href="/">Home</Link>
            </li>
            <li className="text-xl hover:bg-slate-800 hover:text-white w-28 text-center p-[6.5px] hover:transition-opacity duration-500 hover:cursor-pointer rounded-md">
                <Link href="/AboutUs">About Us</Link>
            </li>
            <li className="text-xl hover:bg-slate-800 hover:text-white w-28 text-center p-[6.5px] hover:transition-opacity duration-500 hover:cursor-pointer rounded-md">
                <Link href="/ContactUs">Contact Us</Link>
            </li>
        </ul >
    );
}

export default DesktopNavLinks;