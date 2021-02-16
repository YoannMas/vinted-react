import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm";
import { useLocation } from "react-router-dom";

const stripeKey = loadStripe("pk_test_51ILS14CIE24WqIUs3fC9myejvfoqxsbuR6BLmnT2IuOmcZTernZJb9FIYGTRof5cP9VvS7b7iluGOYi9Vgf0OvHJ00JcEuJk7I");

const Payment = () => {
  const location = useLocation();
  const { title, price } = location.state;

  return (
    <Elements stripe={stripeKey}>
      <CheckoutForm title={title} price={price} />
    </Elements>
  );
};

export default Payment;