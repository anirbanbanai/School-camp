import { useQuery } from "@tanstack/react-query";


const useUsers = () => {
    const {data: users = [], isLoading: loading, refetch} = useQuery({
        queryKey:['users'],
        queryFn: async()=>{
            const res = await fetch('https://assign-12-server-tan.vercel.app/users')
            return res.json()
        }
    });
console.log(users);
    return [users, loading, refetch]
   
};

export default useUsers;