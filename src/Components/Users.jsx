import axios from "axios";
import { useEffect, useState } from "react";
import SubUsers from "./SubUsers";

const Users = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/users')
            .then(data => {
                console.log(data.data);
                setData(data.data);
            })
    }, [])
    return (
        <div className="pt-20">
            <h4 className="text-3xl font-semibold text-center">All users Here</h4>
            <div>
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>img</th>
                                <th>email</th>
                                <th>Make Instractor</th>
                                <th>Make Admin</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((m,index) => <SubUsers key={m._id} m={m} i={index}></SubUsers>)
                            }


                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default Users;