
import SubMySelec from "./SubMySelec";
import useSelectedmyClasses from "../../Hooks/useSelectedClass";
import { Link } from "react-router-dom";

const MySelectedClass = () => {
    const [myclasses, ,refetch] = useSelectedmyClasses();
    console.log(myclasses);
    const total = myclasses.reduce((sum, item)=> sum + item.price,0);
    // console.log(myclasses);
    return (
        <div className="m-5">
            <h3 className="text-center text-3xl font-semibold">MySlected Class</h3>
            <div className="flex justify-end items-center">
                <h4 className="text-2xl font-semibold mr-10">Total Price : ${total}</h4>
            <Link className=" btn btn-warning" to='/dash/mypay'>Pay</Link>
            </div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="text-sm">
                                <th></th>
                                <th>Class name</th>
                                <th>Image</th>
                                <th>Instructor</th>
                                <th>Price</th>
                                <th>Enrol</th>
                                <th>delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                myclasses?.map((m, i) => <SubMySelec key={m._id} m={m} refetch={refetch} i={i}></SubMySelec>)
                            }


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MySelectedClass;