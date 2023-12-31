import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Auth/AuthProvider";
import img from '../assets/img/43351.jpg'

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    // console.log(user);
    const handleOut = () => {
        logOut()

    }
    const navItems = <>
        <li className="text-xl"><NavLink to='/'>Home</NavLink></li>
        <li className="text-xl"><NavLink to='/instractor'>Instructors</NavLink></li>
        <li className="text-xl"><NavLink to='/class'>Classes</NavLink></li>

        {user && <li className="text-xl"><Link to='/dash'>
            <button className="btn btn-sm">

                <div className="badge badge-secondary">DashBoard</div>
            </button>
        </Link></li>}

        {!user && <Link className=" sm:hidden " to='/login'>
            <button className="btn btn-warning btn-outline">Login</button>
        </Link>}
        {user && <Link onClick={handleOut} className=" sm:hidden " to='/login'>
            <button className="btn btn-warning btn-outline">LogOut</button>
        </Link>}
    </>
    return (
        <div className="fixed z-10 w-full opacity-90">
            <div className="navbar bg-base-300">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <div className="flex items-center">
                        <img className="w-[120px] ml-6" src={img} alt="" />
                        <img className="w-[80px] rounded-full sm:hidden" src={user?.photoURL} alt="" />
                        <div className="hidden md:flex">
                            <h3 className="text-4xl font-bold ">Spor<span className="text-blue-600">ts</span><span className="text-yellow-500">Ca</span><span className="text-red-400">mp</span></h3>
                        </div>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <img className="w-[80px] rounded-full hidden sm:flex" src={user?.photoURL} alt="" />
                    {!user && <Link className="hidden sm:flex" to='/login'>
                        <button className="btn btn-warning btn-outline">Login</button>
                    </Link>}

                    {user && <button onClick={handleOut} className="btn btn-warning hidden sm:flex">LOgOut</button>
                    }
                    <Link className="hidden md:flex" to='/register'>
                        <button className="btn btn-primary btn-outline">Register</button>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default Navbar;