import axios from "axios";
import { useEffect } from "react";

const axiosSecure = axios.create({
    baseURL: "http://localhost:5000",
    // headers:
    //     { "Authorization": `Bearer ${localStorage.getItem("access-token")}` }
})

const useAxiosSecure = () => {

    useEffect(()=>{
        axiosSecure.interceptors.request.use((req)=>{
            const token = localStorage.getItem("access-token");
            if(token){
                req.headers.Authorization = `Bearer ${token}`
            }
            return req;
        })
    },[])

    return [axiosSecure]

};

export default useAxiosSecure;