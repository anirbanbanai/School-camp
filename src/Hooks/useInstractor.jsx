import { useQuery } from "@tanstack/react-query";

const useInstractor = () => {
    const {data: instractor = [], isLoading: loading, refetch} = useQuery({
        queryKey:['instractor'],
        queryFn: async()=>{
            const res = await fetch('http://localhost:5000/ins')
            return res.json()
        }
    });
// console.log(instractor);
    return [instractor, loading, refetch]
};

export default useInstractor;