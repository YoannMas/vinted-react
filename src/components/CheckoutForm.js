import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";

const CheckoutForm = ({ title, price, server }) => {
  // Define if payment is succeed or not
  const [succeeded, setSucceeded] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  // Varibles for fees, could be dynamic later
  const protectionFees = 0.4;
  const shippingFees = 0.8;
  const history = useHistory();
  const token = Cookies.get("userToken");
  console.log(token);

  const handleSubmit = async (event) => {
    try {
      // Create the payment with Stripe and return data from backend
      event.preventDefault();
      const CardElements = elements.getElement(CardElement);
      const stripeResponse = await stripe.createToken(CardElements);
      const stripeToken = stripeResponse.token.id;
      const response = await axios.post(`${server}pay`, {
        price: price,
        title: title,
        stripeToken: stripeToken,
      });
      console.log(response);
      if (response.status === 200) {
        setSucceeded("Félicitation, paiement validé ! 🎉");
        // If succeed, display a message (line. 78) and redirect user to home page after 3 secondes
        setTimeout(() => {
          history.push("/");
        }, 3000);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="checkoutform">
      <form onSubmit={handleSubmit}>
        <h4>Résumé de la commande</h4>
        <div className="payment-infos">
          <div>
            <span>Commande</span>
            <span>{price.toFixed(2)} €</span>
          </div>
          <div>
            <span>Frais de protection acheteurs</span>
            <span>{protectionFees.toFixed(2)} €</span>
          </div>
          <div>
            <span>Frais de port</span>
            <span>{shippingFees.toFixed(2)} €</span>
          </div>
        </div>
        <div className="total">
          <div>
            <span>Total</span>
            <span>{(price + protectionFees + shippingFees).toFixed(2)} €</span>
          </div>
          <p>
            Il ne vous reste plus qu'une étape pour vous offrir <span style={{ fontWeight: 600 }}>{title}</span>. Vous allez payer{" "}
            <span style={{ fontWeight: 600 }}>{price} € </span>(frais de protection et frais de port inclus).
          </p>
        </div>
        <div className="stripe">
          <CardElement />
        </div>
        <div className="button-pay-div">
          <button type="submit">Payer</button>
        </div>
        {/* If succeed, display a message */}
        {succeeded && (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: 15 }}>
            <span style={{ marginBottom: 8 }}>{succeeded}</span>
            <span style={{ color: "grey", fontSize: 12 }}>Redirection en cours...</span>
          </div>
        )}
      </form>
    </div>
  );
};

export default CheckoutForm;
