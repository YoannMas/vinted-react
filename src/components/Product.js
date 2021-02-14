import { Link } from "react-router-dom";
import photoTest from "../assets/img/aboutme.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Product = ({ data }) => {
  return (
    <div className="product">
      <div className="user-infos">
        {/* Prod */}
        {data.owner.account.avatar ? (
          <img className="profil-picture" src={data.owner.account.avatar.secure_url} alt="User's avatar" />
        ) : (
          <div className="userpic"></div>
        )}
        {/* Test */}
        {/* <img className="profil-picture" src={photoTest} alt="User's avatar" /> */}
        <span>{data.owner.account.username}</span>
      </div>
      <Link to={`/Offer/${data._id}`}>
        <img src={data.product_image.secure_url} alt={`${data.product_name}`} />
      </Link>
      <div className="product-infos">
        <div>
          <span>{data.product_price.toFixed(2)} €</span>
          <span>{data.product_details[1].TAILLE}</span>
          <span>{data.product_details[0].MARQUE}</span>
        </div>
        <FontAwesomeIcon icon="heart" style={{ color: "lightgrey" }} />
      </div>
    </div>
  );
};

export default Product;
