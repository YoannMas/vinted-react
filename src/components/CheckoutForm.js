import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";

const CheckoutForm = ({ title, price }) => {
  const protectionFees = 0.4;
  const shippingFees = 0.8;

  return (
    <div className="checkoutform">
      <form>
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
