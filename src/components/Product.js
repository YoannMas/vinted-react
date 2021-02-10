import { Link } from "react-router-dom";
import photoTest from "../assets/img/aboutme.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Product = ({ data }) => {
  return (
    <div className="product">
      <div className="user-infos">
        <img className="profil-picture" src={photoTest} alt="Profil picture" />
        <span>{data.owner.account.username}</span>
      </div>
      <Link to={`/Offer/${data._id}`}>
        <img src={data.product_image.secure_url} alt={`Picture of ${data.product_name}`} />
      </Link>
      <div className="product-infos">
        <div>
          <span>{data.product_price} €</span>
          <span>{data.product_details[1].TAILLE}</span>
          <span>{data.product_details[0].MARQUE}</span>
        </div>
        <FontAwesomeIcon icon="heart" style={{ color: "lightgrey" }} />
      </div>
    </div>
  );
};

export default Product;
