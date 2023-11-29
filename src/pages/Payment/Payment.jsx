import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOut from "./CheckOut";



const stripePromise = loadStripe(import.meta.env.VITE_Payment_PK)
const Payment = () => {
    return (
        <div className="min-h-screen">
            <h2 className="text-4xl font-semibold my-10 text-center text-black mb-14">Payment With Stripe</h2>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckOut></CheckOut>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;