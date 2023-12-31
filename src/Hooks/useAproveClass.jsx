import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAproveClasses = () => {
    const [axiosSecure] = useAxiosSecure()
    const {data: classes = [], isLoading: loading, refetch} = useQuery({
        queryKey:['classes'],
        queryFn: async()=>{
            // const res = await fetch('https://assign-12-server-tan.vercel.app/approveClass')
            // return res.json()
            const res = await axiosSecure.get('/approveClass')
            return res.data
        }
    });
// console.log(classes);
    return [classes, loading, refetch]
};

export default useAproveClasses;