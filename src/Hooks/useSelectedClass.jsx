import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useSelectedmyClasses = () => {
    const {user} = useAuth()
    const {data: myclasses = [], isLoading: loading, refetch} = useQuery({
        queryKey:['myclasses'],
        queryFn: async()=>{
            const res = await fetch(`https://assign-12-server-tan.vercel.app/selectedmyClass?email=${user?.email}`)
            return res.json()
        }
    });
console.log(myclasses);
    return [myclasses, loading, refetch]
};

export default useSelectedmyClasses;