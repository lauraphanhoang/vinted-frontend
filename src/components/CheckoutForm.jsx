import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import axios from "axios";
import { useState } from "react";

const CheckoutForm = ({ title, price }) => {
  const stripe = useStripe();
  const elements = useElements();

  const [errorMessage, setErrorMessage] = useState(null);
  const [completed, setCompleted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    if (elements == null) {
      return;
    }

    const { error: submitError } = await elements.submit();
    if (submitError) {
      setErrorMessage(submitError.message);
      return;
    }

    const response = await axios.post(
      "https://lereacteur-vinted-api.herokuapp.com/v2/payment",
      { amount: price, title: title }
    );

    const clientSecret = response.data.client_secret;

    const stripeResponse = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: "http://localhost:5173/",
      },

      redirect: "if_required",
    });

    if (stripeResponse.error) {
      alert("Une erreur s'est produite");
    }

    if (stripeResponse.paymentIntent.status === "succeeded") {
      setCompleted(true);
    }

    setIsLoading(false);
  };

  return completed ? (
    <p>Paiement effectué</p>
  ) : (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <button
        className="pay"
        type="submit"
        disabled={!stripe || !elements || isLoading}
      >
        Pay
      </button>
      {/* Éventuel message d'erreur */}
      {errorMessage && <div>{errorMessage}</div>}
    </form>
  );
};

export default CheckoutForm;
