import { Link, Outlet } from "react-router-dom";
import { AiOutlineMenuUnfold } from 'react-icons/ai';
// import { useContext, useEffect, useState } from "react";
// import axios from "axios";
// import { AuthContext } from "../Auth/AuthProvider";
import useAdmin from "../Hooks/useAdmin";
import useInstractor from "../Hooks/useInstractor";
import useAuth from "../Hooks/useAuth";


const DashBoard = () => {
    const { loading } = useAuth()
    const [isAdmin, loading3] = useAdmin();
    const [isInsloading, loading2] = useInstractor()


    // console.log({loading2, loading3, loading});

    if (loading || loading2 || loading3) {

        return <div className="text-center text-5xl pt-20">
            <span className="loading loading-infinity loading-lg bg-blue-700"></span>
        </div>
    }
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content  justify-center">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn btn-success drawer-button lg:hidden text-2xl"><AiOutlineMenuUnfold /> </label>
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-yellow-300 text-base-content">

                        {
                            isAdmin && <>
                                <li><Link to='/dash/AdminHome' className="text-xl font-semibold">Admin Home </Link></li>
                                <li><Link className="text-xl font-semibold" to='/dash/users'>Manage User</Link></li>
                                <li><Link className="text-xl font-semibold" to='/dash/manageClass'>Manage Clases</Link></li>
                            </>
                            
                            ||
                            
                            isInsloading && <>
                                <li><Link to='/dash/instractorHome' className="text-xl font-semibold">Instractor Home</Link></li>
                                <li><Link to='/dash/myclass' className="text-xl font-semibold">My Class</Link></li>
                                <li><Link to='/dash/addclass' className="text-xl font-semibold">Add Class</Link></li>
                            </>
                            ||
                            <>
                                <li> <Link className="text-xl font-semibold">Student HOme</Link></li>
                                <li>  <Link to='/dash/myselectedclass' className="text-xl font-semibold">My Seleted Classes</Link></li>
                                <li>   <Link to='/dash/myenrolclass' className="text-xl font-semibold">My Enrol Classes</Link></li>
                            </>
                        }

                        {/* 
                        {isAdmin && <>
                            <li><Link to='/dash/AdminHome' className="text-xl font-semibold">Admin Home </Link></li>
                            <li><Link className="text-xl font-semibold" to='/dash/users'>Manage User</Link></li>
                            <li><Link className="text-xl font-semibold" to='/dash/manageClass'>Manage Clases</Link></li>
                        </>}


                        {
                            isInsloading && <>
                                <li><Link to='/dash/instractorHome' className="text-xl font-semibold">Instractor Home</Link></li>
                                <li><Link to='/dash/myclass' className="text-xl font-semibold">My Class</Link></li>
                                <li><Link to='/dash/addclass' className="text-xl font-semibold">Add Class</Link></li>
                            </>
                        } */}

                        {/* <li> <Link className="text-xl font-semibold">Student HOme</Link></li>
                        <li>  <Link to='/dash/myselectedclass' className="text-xl font-semibold">My Seleted Classes</Link></li>
                        <li>   <Link to='/dash/myenrolclass' className="text-xl font-semibold">My Enrol Classes</Link></li> */}


                        <div className="divider divide-x-8"></div>

                        <li><Link to='/' className="text-xl font-semibold">Home</Link></li>
                        <li className="text-xl font-semibold"><Link to='/instractor'>Instructors</Link></li>
                        <li className="text-xl"><Link className="text-xl font-semibold" to='/class'>Classes</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashBoard;