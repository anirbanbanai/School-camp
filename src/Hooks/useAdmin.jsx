import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
    const { user } = useAuth()
    console.log(user?.email);
    const [axiosSecure] = useAxiosSecure()

    const { data: isAdmin, } = useQuery({
        queryKey: ['isAdmin', user?.email],
        enabled: !!user?.email && !!localStorage.getItem("access-token"),
        queryFn: async () => {
           const res = await axiosSecure.get(`/users/admin/${user?.email}`)
           console.log('is admin response', res);
           return res.data.admin;
        }
    })
console.log(isAdmin);
    return [isAdmin]

}
export default useAdmin;