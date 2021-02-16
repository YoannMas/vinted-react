import { useParams, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import ProductDetails from "../components/ProductDetails";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Cookies from "js-cookie";
import Login from "../components/Login";

const Offer = ({ setCurrentPage, loginModal, setLoginModal, setSignupModal, currentPage, setUser, server }) => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();
  const token = Cookies.get("userToken");

  const fetchData = async () => {
    try {
      const response = await axios.get(`${server}offer/${id}`);
      setData(response.data);
      setIsLoading(false);
      // Define current page on Offer/id of target product
      setCurrentPage(`Offer/${id}`);
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

  // Responsive for carousel
  const responsive = {
    allTypeOfScreen: {
      breakpoint: { max: 4000, min: 0 },
      items: 1,
    },
  };

  return isLoading ? (
    <span>Chargement en cours...</span>
  ) : (
    <div className="offer">
      <div className="wrapper-offer">
        {/* Display each picture of the product with a carousel */}
        <Carousel responsive={responsive}>
          {data.product_pictures.map((el) => {
            return <img src={el.secure_url} alt={data.product_name} />;
          })}
        </Carousel>
        <div className="offer-infos">
          <h4>{data.product_price.toFixed(2)} €</h4>
          <ul className="product-details">
            {/* Return details of the product */}
            {data.product_details.map((el, index) => {
              return <ProductDetails data={el} key={index} />;
            })}
          </ul>
          <div className="other-infos">
            <h5>{data.product_name}</h5>
            <span>{data.product_description}</span>
            <div>
              {/* If owner hasn't avatar, create a fake avatar with the first letter of username in uppercase in a circle */}
              {data.owner.account.avatar ? (
                <img className="profil-picture" src={data.owner.account.avatar.secure_url} alt="User's avatar" />
              ) : (
                <div style={{ marginRight: 10 }} className="userpic">
                  <span style={{ color: "#fff", fontSize: 20 }}>{data.owner.account.username.substring(0, 1).toUpperCase()}</span>
                </div>
              )}
              <span>{data.owner.account.username}</span>
            </div>
            <button
              // Check if user has a token
              onClick={() => {
                if (token) {
                  history.push("/Payment", { title: data.product_name, price: data.product_price });
                } else {
                  <Login
                    setUser={setUser}
                    setLoginModal={setLoginModal}
                    setSignupModal={setSignupModal}
                    currentPage={currentPage}
                    server={server}
                  />;
                  setLoginModal((loginModal) => !loginModal);
                }
              }}
            >
              Acheter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
