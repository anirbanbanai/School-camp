import { useQuery } from "@tanstack/react-query";


const useUsers = () => {
    const {data: users = [], isLoading: loading, refetch} = useQuery({
        queryKey:['users'],
        queryFn: async()=>{
            const res = await fetch('http://localhost:5000/users')
            return res.json()
        }
    });
console.log(users);
    return [users, loading, refetch]
   
};

export default useUsers;