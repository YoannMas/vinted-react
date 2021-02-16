import Product from "../components/Product";
import hero from "../assets/img/Hero-picture.jpeg";
import overlay from "../assets/img/overlay.svg";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Home = ({ search, price, range, setCurrentPage, server }) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  // Intialization of queries
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  let sort = "price-asc";

  // state price is a toggle defined by the button filter
  if (!price) {
    sort = "price-desc";
  }

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${server}offers?page=${page}&title=${search}&sort=${sort}&priceMin=${range[0]}&priceMax=${range[1]}&limit=${limit}`
      );
      setData(response.data);
      setIsLoading(false);
      // Change current page to Home
      setCurrentPage("Home");
    } catch (error) {
      console.log(error.message);
      if (error.response) {
        console.log(error.response.message);
      }
    }
  };

  // Recharge the component when filters change
  useEffect(() => {
    fetchData();
  }, [page, search, sort, range, limit]);

  return isLoading ? (
    <span>En cours de chargement</span>
  ) : (
    <div className="home">
      <div className="hero">
        <img src={hero} alt="Someone buying clothes" />
        <img className="overlay" src={overlay} alt="overlay" />
        <div className="hero-box">
          <h3>Prêts à faire du tri dans vos placard ?</h3>
          <Link to="/Publish">Commencer à vendre</Link>
        </div>
      </div>
      <div className="container">
        <div className="select">
          {/* Define the number of product in home page */}
          <span>Nombre de produits par page :</span>
          <select
            onChange={(event) => {
              setLimit(event.target.value);
            }}
          >
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
          </select>
        </div>
        <div className="products">
          {data.offers.map((el) => {
            return <Product data={el} key={el._id} />;
          })}
        </div>
      </div>
      {/* For changing page */}
      <div className="pages">
        {page > 1 ? (
          <button
            onClick={() => {
              setPage(page - 1);
            }}
          >
            <FontAwesomeIcon icon={faChevronLeft} style={{ fontSize: 20, marginRight: 20 }} />
            Précedent
          </button>
        ) : (
          <div className="first-hidden"></div>
        )}
        {data.offers.length < limit ? (
          <div className="second-hidden"></div>
        ) : (
          <button
            onClick={() => {
              setPage(page + 1);
            }}
          >
            Suivant
            <FontAwesomeIcon icon={faChevronRight} style={{ fontSize: 20, marginLeft: 20 }} />
          </button>
        )}
      </div>
    </div>
  );
};
export default Home;
