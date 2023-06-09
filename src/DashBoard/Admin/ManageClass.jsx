import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import SubManageClass from "./SubManageClass";
// import SubManageClass from "./SubManageClass";

const ManageClass = () => {
    const [data, setData] = useState();
    const [axiosSecure] = useAxiosSecure();
    useEffect(() => {
        axiosSecure.get('/classes')
            .then(data => {
                console.log(data);
                setData(data.data)
            })
    }, [axiosSecure])
    console.log(data);
    return (
        <div className="m-10">
            <h5 className="text-3xl font-semibold text-center">Manage Class</h5>
            <div>
                <div className="overflow-x-auto">
                    <table className="table table-xs table-pin-rows table-pin-cols">
                        <thead>
                            <tr>
                                <th>#</th>
                                <td className="text-sm">Class Image</td>
                                <td className="text-sm">Class Name</td>
                                <td className="text-sm">Instructor </td>
                                <td className="text-sm">Available seat</td>
                                <td className="text-sm">Price</td>
                                <td className="text-sm">Status</td>
                                <td className="text-sm">Action</td>
                                {/* <th className="text-sm">Deny</th>
                                <th className="text-sm">Send Feedback</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data?.map((m, index) => <SubManageClass key={m._id} main={m} i={index}></SubManageClass>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageClass;
// {
//     data?.map(m=> <SubManageClass key={m._id} main={m}></SubManageClass>)
// }