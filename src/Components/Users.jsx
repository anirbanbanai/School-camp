import SubUsers from "./SubUsers";
import useUsers from "../Hooks/useUsers";

const Users = () => {
    const [users, ,refetch] = useUsers();
    console.log(users);
   
    return (
        <div className="">
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
                                users.map((m,index) => <SubUsers key={m._id} m={m} i={index} refetch={refetch}></SubUsers>)
                            }


                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default Users;