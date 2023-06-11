import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import SubMyEnrolled from "./SubMyEnrolled";

const MyEnrolClass = () => {
    const [data, setData] = useState();
    const { user } = useAuth()
    const [axiosSecure] = useAxiosSecure()
    useEffect(() => {
        axiosSecure.get(`/enrolClassE?email=${user?.email}`)
            .then(data => {
                console.log(data);
                setData(data.data)
            })
    }, [axiosSecure, user?.email])
    // console.log(data);
    return (
        <div className="m-10">
            <h4 className="text-4xl font-semibold text-center">My Enrol Class</h4>
            <div>
                <div>
                    <div className="overflow-x-auto">
                        <table className="table table-zebra w-3/4 mx-auto">
                            {/* head */}
                            <thead>
                                <tr className="text-xl ">
                                    
                                    <th>Name</th>
                                    <th>image</th>
                                    <th>Instructor</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data?.map((m, i) => <SubMyEnrolled key={m._id} i={i} m={m.all}></SubMyEnrolled>)
                                }


                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MyEnrolClass;