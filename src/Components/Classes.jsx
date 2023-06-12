import SubClasses from "./SubClasses";
import useAproveClasses from "../Hooks/useAproveClass";
import { Helmet } from "react-helmet-async";

const Classes = () => {
    const [classes] = useAproveClasses()
    // console.log(classes);
    return (
        <div className="pt-20">
            <Helmet>
                <title>
                    Classes
                </title>
            </Helmet>
            <h4 className="text-4xl font-semibold text-center">All class </h4>
            <div>
                {
                    classes?.map(m => <SubClasses key={m._id} main={m}></SubClasses>)
                }
            </div>
        </div>
    );
};

export default Classes;