
import SubMyClassjsx from "./SubMyClass";
import useMyClasses from "../../Hooks/useMyClasses";

const MyClass = () => {
    const [myclasses, refetch] = useMyClasses();
    console.log(myclasses);
   
    return (
        <div>
            <h4 className="text-3xl font-semibold text-center">My Class</h4>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>img</th>
                                <th>Email</th>
                                <th>price</th>
                                <th>Avilable seat</th>
                                <th>Total Enrol</th>
                                <td>Status</td>
                                <th>Update</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                myclasses?.map((m, index) => <SubMyClassjsx key={m._id} i={index} m={m} refetch={refetch}></SubMyClassjsx>)
                            }


                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default MyClass;