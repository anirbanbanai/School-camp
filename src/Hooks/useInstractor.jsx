import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useInstractor = () => {
    const {user} = useAuth();
    const [axiosSecure] = useAxiosSecure()
    const {data: instractor =false, isLoading: isInsloading, refetch} = useQuery({
        queryKey:['instractor'],
        enabled: !!user?.email && !!localStorage.getItem("access-token"),
        queryFn: async()=>{
            const res = await axiosSecure.get(`/users/ins/${user?.email}`)
            console.log('is Instror ', res);
            return res.data.instractor;
        }
    });
// console.log(instractor);
    return [instractor, isInsloading, refetch]
};

export default useInstractor;