import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider";

const useAdmin= ()=>{
    const {user} = useContext(AuthContext);
    console.log(user?.email);
const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
    queryKey:['isAdmin', user?.email],
    queryFn: async()=>{
      axios.get(`http://localhost:5000/users/admin/${user?.email}`)
        .then(data=>{
            console.log(data);
        })
       
    }
})

return [isAdmin, isAdminLoading]
}
export default useAdmin;