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
    console.log(data);
    return (
        <div className="m-10">
            <h4>My Enrol Class</h4>
            <div>
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr className="text-sm">
                                <th></th>
                                <th >Name</th>
                                <th>instructor_name</th>
                                <th>image</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data?.map((m , i) => <SubMyEnrolled key={m._id} m={m}  i={i}></SubMyEnrolled>)
                            }
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyEnrolClass;