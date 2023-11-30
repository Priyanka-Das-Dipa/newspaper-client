import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { Button } from "flowbite-react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const CheckOut = () => {
  const stripe = useStripe();
  const elements = useElements();
  // const [clientSecret, setClientSecret] = useState('')
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure.post("/create-payment-intent");
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment({
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });
    if (confirmError) {
      console.log("confirm Error");
    } else {
      console.log("payment intent", paymentIntent);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <Button className="mt-5" type="submit" disabled={!stripe}>
          Pay
        </Button>
      </form>
    </div>
  );
};

export default CheckOut;
