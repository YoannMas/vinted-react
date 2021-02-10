import { useParams } from "react-router-dom";

const Offer = ({ data }) => {
  const { id } = useParams();
  console.log(data);
  return (
    <div className="offer">
      <div className="container">
        {/* {data.map((el) => {
            return el._id === id && <img src={el.product_image.secure_url} alt={`Picture of ${el.product_name}`} />;
        })} */}
      </div>
    </div>
  );
};

export default Offer;
