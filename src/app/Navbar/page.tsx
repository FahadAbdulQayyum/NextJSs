import Link from 'next/link';

const Navbar = () => {
    return (
        <div
            className="bg-slate-800 flex flex-cols justify-between"
        >
            <div>logo</div>
            <ul
                className="flex flex-cols space-x-4"
            >
                <li>
                    <Link href='/Home'>Home</Link>
                </li>
                <li>
                    <Link href='/AboutUs'>About Us</Link>
                </li>
                <li>
                    <Link href='/ContactUs'>Contact Us</Link>
                </li>
            </ul>
            <div>
            </div>
            <div>
                Emburgur
            </div>
        </div>
    )
}

export default Navbar
