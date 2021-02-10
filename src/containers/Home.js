import Product from "../components/Product";
import hero from "../assets/img/Hero-picture.jpeg";

const Home = ({ data }) => {
  //   console.log(data);
  return (
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
