import { Link, Outlet } from "react-router-dom";

const DashBoard = () => {
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content  justify-center">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-yellow-300 text-base-content">
                        {/* Sidebar content here */}
                        <li><Link className="text-xl font-semibold">Admin Home</Link></li>
                        <li><Link className="text-xl font-semibold" to='/dash/users'>Manage User</Link></li>
                        <li><Link className="text-xl font-semibold" to='/dash/manageclass'>Manage Clases</Link></li>
                        <div className="divider divide-x-8">and</div>
                        <li><Link to='/' className="text-xl font-semibold">Home</Link></li>
                        <li className="text-xl"><Link to='/instractor'>Instructors</Link></li>
        <li className="text-xl"><Link to='/class'>Classes</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashBoard;