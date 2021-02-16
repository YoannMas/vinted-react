import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm";
import { useLocation } from "react-router-dom";
import Login from "../components/Login";
import Cookies from "js-cookie";
import { useEffect } from "react";

const stripeKey = loadStripe("pk_test_51ILS14CIE24WqIUs3fC9myejvfoqxsbuR6BLmnT2IuOmcZTernZJb9FIYGTRof5cP9VvS7b7iluGOYi9Vgf0OvHJ00JcEuJk7I");

const Payment = ({ setCurrentPage }) => {
  const location = useLocation();
  const { title, price, userId } = location.state;
  console.log(location);

  return (
    <Elements stripe={stripeKey}>
      {setCurrentPage("Payment")}
      <CheckoutForm title={title} price={price} userId={userId} />
    </Elements>
  );
};

export default Payment;
