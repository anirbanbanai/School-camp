import { useContext } from "react";
import { Link, NavLink} from "react-router-dom";
import { AuthContext } from "../Auth/AuthProvider";
import useAdmin from "../Hooks/useAdmin";
import useInstractor from "../Hooks/useInstractor";

const Navbar = () => {
    const [isAdmin] = useAdmin();
    const [instractor] = useInstractor();
    const { user, logOut } = useContext(AuthContext);
    console.log(user);
    const handleOut = () => {
        logOut()
        
    }
    const navItems = <>
        <li className="text-xl"><NavLink to='/'>Home</NavLink></li>

        <li className="text-xl"><NavLink to='/instractor'>Instructors</NavLink></li>
        <li className="text-xl"><NavLink to='/class'>Classes</NavLink></li>
        {user && <li className="text-xl"><Link to={isAdmin && '/dash/manageClass' || instractor && '/dash/myclass' || '/dash/myselectedclass'}>
            <button className="btn btn-sm">

                <div className="badge badge-secondary">DashBoard</div>
            </button>
        </Link></li>}
    </>
    return (
        <div className="fixed z-10 w-full opacity-90">
            <div className="navbar bg-base-300">
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
                    <img className="w-[80px] rounded-full" src={user?.photoURL} alt="" />
                    {!user && <Link to='/login'>
                        <button className="btn btn-warning btn-outline">Login</button>
                    </Link>} 
                    
                    {user&& <button onClick={handleOut} className="btn btn-warning ">LOgOut</button>
                    }
                    <Link to='/register'>
                        <button className="btn btn-primary btn-outline">Register</button>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default Navbar;