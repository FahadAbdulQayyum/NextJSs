import Link from 'next/link';
import Button from '../components/Button/button';
function DesktopNavLinks() {
    return (
        // <ul className="absolute right-0 flex flex-row space-x-6">
        <ul className="absolute right-0 flex flex-row space-x-1">
            <li className="text-xl hover:bg-slate-800 hover:text-white w-28 text-center p-[6.5px] hover:transition-opacity duration-500 hover:cursor-pointer rounded-md">
                <Button>
                    <Link href="/">Home</Link>
                </Button>
            </li>
            <li className="text-xl hover:bg-slate-800 hover:text-white w-28 text-center p-[6.5px] hover:transition-opacity duration-500 hover:cursor-pointer rounded-md">
                <Link href="/">Home</Link>
            </li>
            <li className="text-xl hover:bg-slate-800 hover:text-white w-28 text-center p-[6.5px] hover:transition-opacity duration-500 hover:cursor-pointer rounded-md">
                <Link href="/AboutUs">About Us</Link>
            </li>
            <li className="text-xl hover:bg-slate-800 hover:text-white w-28 text-center p-[6.5px] hover:transition-opacity duration-500 hover:cursor-pointer rounded-md">
                <Link href="/ContactUs">Contact Us</Link>
            </li>
            <li className="text-xl hover:bg-slate-800 hover:text-white w-28 text-center p-[6.5px] hover:transition-opacity duration-500 hover:cursor-pointer rounded-md relative group">
                <Link className='services-button' href="/Services">Services</Link>
                <div
                    // className='hidden hover:flex'
                    className='hidden group-hover:flex absolute'
                >
                    <ul
                        className='bg-slate-800 space-y-2 text-sm mt-2 w-28'
                    >
                        <li className="hover:bg-orange-200 w-[100%] hover:text-black">
                            Development
                        </li>
                        <li className="hover:bg-orange-200 w-[100%] hover:text-black">
                            Design
                        </li>
                        <li className="hover:bg-orange-200 w-[100%] hover:text-black">
                            DevOps
                        </li>
                    </ul>
                </div>
            </li>
        </ul >
    );
}

export default DesktopNavLinks;