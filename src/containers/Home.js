import Product from "../components/Product";
import hero from "../assets/img/Hero-picture.jpeg";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = ({ search, price, range }) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  let sort = "price-asc";

  if (!price) {
    sort = "price-desc";
  }
  console.log(sort);
  const numPages = Math.ceil(data.number / limit); // count the number of pages, adding buttons with pages number
  console.log(search);

  const fetchData = async () => {
    const response = await axios.get(
      `https://vinted-reacteur.herokuapp.com/offers?page=${page}&title=${search}&sort=${sort}&priceMin=${range[0]}&priceMax=${range[1]}`
    );
    setData(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [page, search, sort, range]);

  return isLoading ? (
    <span>En cours de chargement</span>
  ) : (
    <div className="home">
      <div className="hero">
        <img src={hero} alt="Someone buying clothes" />
        <div className="hero-box">
          <h3>Prêts à faire du tri dans vos placard ?</h3>
          <Link to="#">Commencer à vendre</Link>
        </div>
      </div>
      <div className="container">
        <div className="products">
          {data.offers.map((el) => {
            return <Product data={el} key={el._id} />;
          })}
        </div>
      </div>
      <div className="pages">
        {/* to improve with number of page */}
        <button
          onClick={() => {
            setPage(page - 1);
          }}
        >
          -
        </button>
        <button
          onClick={() => {
            setPage(page + 1);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};
export default Home;
