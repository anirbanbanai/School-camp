import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useSelectedmyClasses = () => {
    const [axiosSecure] = useAxiosSecure()
    const {user} = useAuth()
    const {data: myclasses = [], isLoading: loading, refetch} = useQuery({
        queryKey:['myclasses'],
        queryFn: async()=>{
            const res = await axiosSecure.get(`selectedmyClass?email=${user?.email}`)
            return res.data
        }
    });
// console.log(myclasses);
    return [myclasses, loading, refetch]
};

export default useSelectedmyClasses;