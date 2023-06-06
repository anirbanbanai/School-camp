import { Link } from "react-router-dom";

const Navbar = () => {

    const navItems = <>
        <li className="text-xl"><Link>Home</Link></li>
        <li className="text-xl"><Link>About</Link></li>
        <li className="text-xl"><Link>Contact</Link></li>
        <li className="text-xl"><Link>DashBoard</Link></li>
    </>
    return (
        <div className="fixed z-10 w-full opacity-90">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-4xl font-bold">Spor<span className="text-blue-600">ts</span><span className="text-yellow-500">Ca</span><span className="text-red-400">mp</span></h3>
                    </div>
                </div>
                <div className="navbar-center hidden md:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link>
                        <button className="btn btn-warning btn-outline">Login</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;