
import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import axios from "axios";
import SubMyClassjsx from "./SubMyClass";

const MyClass = () => {
    const { user } = useAuth();
    const [data, setData] = useState()
    useEffect(() => {
        axios.get(`http://localhost:5000/classesE?email=${user?.email}`)
            .then(data => {
                // console.log(data.data);
                setData(data.data)
            })
    }, [user?.email])
    console.log(data);
    return (
        <div>
            <h4>My Class</h4>
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
                                <th>Update</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data?.map((m, index) => <SubMyClassjsx key={m._id} i={index} m={m}></SubMyClassjsx>)
                            }


                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default MyClass;