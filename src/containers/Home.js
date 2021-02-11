import Product from "../components/Product";
import hero from "../assets/img/Hero-picture.jpeg";
import { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const fetchData = async () => {
    const response = await axios.get("https://vinted-reacteur.herokuapp.com/offers");
    setData(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return isLoading ? (
    <span>En cours de chargement</span>
  ) : (
    <div className="home">
      <img src={hero} alt="Picture of someone buying clothes" />
      <div className="container">
        <div className="products">
          {data.offers.map((el) => {
            return <Product data={el} key={el._id} />;
          })}
        </div>
      </div>
    </div>
  );
};
export default Home;
