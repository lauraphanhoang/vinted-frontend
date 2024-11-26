import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm";
import { useLocation } from "react-router-dom";

const stripePromise = loadStripe(
  "pk_test_51HCObyDVswqktOkX6VVcoA7V2sjOJCUB4FBt3EOiAdSz5vWudpWxwcSY8z2feWXBq6lwMgAb5IVZZ1p84ntLq03H00LDVc2RwP"
);
const Payment = () => {
  const location = useLocation();
  const { title, price } = location.state;

  const options = {
    mode: "payment",
    amount: price * 100,
    currency: "eur",
    appearance: {
      /*...*/
    },
  };
  return (
    <main>
      <div className="payment-container ">
        <div className="cart">
          <h3>Résumé de la commande</h3>
          <div className="payment-details">
            <p>
              Commande : {title} {price} €{" "}
            </p>
            <p>Frais protection acheteurs : 0.40 €</p>
            <p>Frais de port : 0.80€</p>
          </div>
          <div className="cart-total">
            <p className="total">Total : {price + 0.8 + 0.4} €</p>
            <span>
              Il ne vous reste plus qu'une étape pour vous offrir {title}. Vous
              allez payer {price + 0.8 + 0.4} € (frais de protection et frais de
              port inclus).
            </span>
          </div>
        </div>
        <div>
          <Elements stripe={stripePromise} options={options}>
            <CheckoutForm />
          </Elements>
        </div>
      </div>
    </main>
  );
};

export default Payment;
