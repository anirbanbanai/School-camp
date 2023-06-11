import { useNavigate } from "react-router-dom";


const ErrorPage = () => {
    const navigate = useNavigate();
    const Back =()=>{
        navigate(-1)
    }
    return (
        <div className="m-10">
            <h4 className="text-5xl font-bold text-center" >You enter wrong site</h4>
            <div>
                <img className="w-[50%] mx-auto" src='https://img.freepik.com/premium-vector/cartoon-computer-with-face-fire-burning-it_9206-9037.jpg?w=2000' alt="" />
            </div>
            <div className="flex justify-center">
            <button onClick={Back} className="btn btn-warning items-center">Back to Home</button>
            </div>
        </div>
    );
};

export default ErrorPage;