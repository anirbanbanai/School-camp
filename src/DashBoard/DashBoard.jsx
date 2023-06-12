import { NavLink, Outlet } from "react-router-dom";
// import { AiOutlineMenuUnfold } from 'react-icons/ai';
// import { useContext, useEffect, useState } from "react";
// import axios from "axios";
// import { AuthContext } from "../Auth/AuthProvider";
import useAdmin from "../Hooks/useAdmin";
import useInstractor from "../Hooks/useInstractor";
import useAuth from "../Hooks/useAuth";


const DashBoard = () => {
    const { loading } = useAuth()
    const [isAdmin, loading3] = useAdmin();
    const [instractor, loading2] = useInstractor()


    // console.log({loading2, loading3, loading});

    if (loading || loading2 || loading3) {

        return <div className="text-center text-5xl pt-20">
            <span className="loading loading-infinity loading-lg bg-blue-700"></span>
        </div>
    }
    return (
        <div>
            <h3 className="text-4xl font-semibold text-center mb-5 mt-5">This is dashboard</h3>

            <div className="flex w-full">
                <div className="flex justify-center  flex-grow card bg-yellow-300 rounded-box place-items-center p-3">

                    {
                        isAdmin && <>

                            <NavLink className="text-2xl mr-5 mb-2 font-semibold" to='/dash/users'>Manage User</NavLink>
                            <NavLink className="text-2xl mr-5 font-semibold" to='/dash/manageClass'>Manage Clases</NavLink>
                        </>

                        ||

                        instractor && <>

                            <NavLink to='/dash/myclass' className="text-xl font-semibold mr-5 mb-2">My Class</NavLink>
                            <NavLink to='/dash/addclass' className="text-xl font-semibold mr-5">Add Class</NavLink>
                        </>
                        ||
                        <>

                            <NavLink to='/dash/myselectedclass' className="text-xl mb-2 mr-5 font-semibold">My Seleted Classes</NavLink>
                            <NavLink to='/dash/myenrolclass' className="text-xl mr-5 font-semibold">My Enrol Classes</NavLink>
                            <NavLink to='/dash/payHis' className="text-xl mr-5 font-semibold">My Payment History</NavLink>
                        </>
                    }

                </div>
                <div className="divider divider-horizontal">And</div>
                <div className="flex flex-grow card bg-base-300 rounded-box place-items-center">
                    <NavLink to='/' className="text-xl font-semibold mb-2">Home</NavLink>
                    <NavLink className="text-xl font-semibold mb-2" to='/instractor'>Instructors</NavLink>
                    <NavLink className="text-xl font-semibold" to='/class'>Classes</NavLink>
                </div>
            </div>
            <div>


                <div>
                    <Outlet></Outlet>
                </div>


                <div className="divider divide-x-8"></div>



            </div>
        </div>
    );
};

export default DashBoard;