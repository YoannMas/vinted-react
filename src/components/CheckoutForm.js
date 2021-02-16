import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { useState } from "react";
import axios from "axios";

const CheckoutForm = ({ title, price, userId }) => {
  const [succeded, setSucceded] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const protectionFees = 0.4;
  const shippingFees = 0.8;
  console.log(succeded);

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const CardElements = elements.getElement(CardElement);
      const stripeResponse = await stripe.createToken(CardElements, {
        userId: userId,
      });
      const stripeToken = stripeResponse.token.id;
      const response = await axios.post("https://vinted-reacteur.herokuapp.com/pay", {
        price: price,
        title: title,
        stripeToken: stripeToken,
      });
      console.log(response);
      if (response.status === 200) {
        setSucceded("Félicitation, paiement validé ! 🎉");
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
      </form>
    </div>
  );
};

export default CheckoutForm;
