import axios from "axios";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Auth/AuthProvider";

const axiosSecure = axios.create({
    baseURL: "https://assign-12-server-tan.vercel.app/",
    // headers:
    //     { "Authorization": `Bearer ${localStorage.getItem("access-token")}` }
})

const useAxiosSecure = () => {
    const { logOut } = useContext(AuthContext)
    const navigate = useNavigate()

    useEffect(() => {
        axiosSecure.interceptors.request.use((req) => {
            const token = localStorage.getItem("access-token");
            if (token) {
                req.headers.Authorization = `Bearer ${token}`
            }
            return req;
        })

        axiosSecure.interceptors.response.use((res) => res,
            async(error) => {
                if (error.response && (error?.response.status === 403 || error?.response.status === 401)) {
                   await logOut();
                    navigate('/')
                }
            }
        )
    }, [logOut, navigate])

    return [axiosSecure]

};

export default useAxiosSecure;