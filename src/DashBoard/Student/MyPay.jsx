import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheakOutForm from "./CheakOutForm";
import useSelectedmyClasses from "../../Hooks/useSelectedClass";

// TODO Provide tok
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const MyPay = () => {
    const [myclasses] = useSelectedmyClasses();
    console.log(myclasses);
    const total = myclasses.reduce((sum, item)=> sum + item.price,0);
    const price = parseFloat(total.toFixed(2))
    console.log(total);
    return (
        <div className="m-10">
            <h4 className="text-3xl font-semibold text-center">My Pay</h4>
            <Elements stripe={stripePromise}> 
            <CheakOutForm price={price} myclasses={myclasses}></CheakOutForm>
            </Elements>
        </div>
    );
};

export default MyPay;