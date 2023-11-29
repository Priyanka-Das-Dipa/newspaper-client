import { loadStripe } from "@stripe/stripe-js";



const stripePromise = loadStripe('')
const Payment = () => {
    return (
        <div className="min-h-screen">
            <h2 className="text-4xl font-semibold my-10 text-center text-black mb-14">Payment With Stripe</h2>
        </div>
    );
};

export default Payment;