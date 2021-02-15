import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import ProductDetails from "../components/ProductDetails";
import photoTest from "../assets/img/aboutme.jpg";

const Offer = ({ setMainPage }) => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://vinted-reacteur.herokuapp.com/offer/${id}`);
      setData(response.data);
      setIsLoading(false);
      setMainPage(false);
    } catch (error) {
      console.log(error.message);
      if (error.response) {
        console.log(error.response.message);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  return isLoading ? (
    <span>Chargement en cours...</span>
  ) : (
    <div className="offer">
      <div className="wrapper-offer">
        <img src={data.product_image.secure_url} alt="" />
        <div className="offer-infos">
          <h4>{data.product_price.toFixed(2)} €</h4>
          <ul className="product-details">
            {data.product_details.map((el, index) => {
              return <ProductDetails data={el} key={index} />;
            })}
          </ul>
          <div className="other-infos">
            <h5>{data.product_name}</h5>
            <span>{data.product_description}</span>
            <div>
              {data.owner.account.avatar ? (
                <img className="profil-picture" src={data.owner.account.avatar.secure_url} alt="User's avatar" />
              ) : (
                <div style={{ marginRight: 10 }} className="userpic"></div>
              )}
              <span>{data.owner.account.username}</span>
            </div>
            <button>Acheter</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
