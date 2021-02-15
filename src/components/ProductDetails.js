const ProductDetails = ({ data }) => {
  console.log(data);
  const keys = Object.keys(data);
  const values = Object.values(data);
  return (
    <li>
      <span>{keys[0]}</span>
      <span>{values[0]}</span>
    </li>
  );
};

export default ProductDetails;
