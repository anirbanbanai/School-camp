
import SubManageClass from "./SubManageClass";
import useClasses from "../../Hooks/useClasses";
// import SubManageClass from "./SubManageClass";

const ManageClass = () => {
    const [classes, ,refetch] = useClasses();
    console.log(classes);
 
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
                                <td className="text-sm">Aprove</td>
                                <td className="text-sm">Deny</td>
                                <td className="text-sm">Fedback</td>
                                {/* <th className="text-sm">Deny</th>
                                <th className="text-sm">Send Feedback</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {
                                classes?.map((m, index) => <SubManageClass key={m._id} main={m} i={index} refetch={refetch}></SubManageClass>)
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