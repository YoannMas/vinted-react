const ProductDetails = ({ data }) => {
  console.log(data);
  const keys = Object.keys(data);
  const values = Object.values(data);
  return (
    <div>
      <span>{keys[0]}</span>
      <span>{values[0]}</span>
    </div>
  );
};

export default ProductDetails;
