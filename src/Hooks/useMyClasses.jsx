import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useMyClasses = () => {
    const [axiosSecure] = useAxiosSecure()
    const {user} = useAuth()
    const {data: myclasses = [], isLoading: loading, refetch} = useQuery({
        queryKey:['myclasses'],
        // enabled: !! user?.email && !!localStorage.getItem('access-token') ,
        queryFn: async()=>{
            // const res = await fetch(`https://assign-12-server-tan.vercel.app/classesE?email=${user?.email}`)
            // return res.json()
            const res = await axiosSecure.get(`/classesE?email=${user?.email}`)
            // console.log(res.data);
            return res.data
        }
    });
// console.log(myclasses);
    return [myclasses, loading, refetch]
};

export default useMyClasses;