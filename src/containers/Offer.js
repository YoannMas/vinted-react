import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import ProductDetails from "../components/ProductDetails";
import photoTest from "../assets/img/aboutme.jpg";

const Offer = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const response = await axios.get(`https://vinted-reacteur.herokuapp.com/offer/${id}`);
    setData(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return isLoading ? (
    <span>Chargement en cours...</span>
  ) : (
    <div className="offer">
      <div className="wrapper-offer">
        <img src={data.product_image.secure_url} alt="" />
        <div className="offer-infos">
          <h4>{data.product_price} €</h4>
          <div className="product-details">
            {data.product_details.map((el, index) => {
              return <ProductDetails data={el} key={index} />;
            })}
          </div>
          <div className="other-infos">
            <h5>{data.product_name}</h5>
            <span>{data.product_description}</span>
            <div>
              <img src={photoTest} alt="Profil picture" />
              <span>{data.owner.account.username}</span>
              {/* To modidy when heroku will be update */}
            </div>
            <button>Acheter</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
