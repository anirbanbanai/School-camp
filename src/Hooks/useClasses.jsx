import { useQuery } from "@tanstack/react-query";

const useClasses = () => {
    const {data: classes = [], isLoading: loading, refetch} = useQuery({
        queryKey:['classes'],
        queryFn: async()=>{
            const res = await fetch('https://assign-12-server-tan.vercel.app/classes')
            return res.json()
        }
    });
console.log(classes);
    return [classes, loading, refetch]
};

export default useClasses;