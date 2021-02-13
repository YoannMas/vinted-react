import { makeStyles, Slider } from "@material-ui/core";
import { useState } from "react";

const PriceRange = () => {
  const [value, setValue] = useState([20, 37]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const useStyles = makeStyles({
    root: {
      color: "#0cb0ba",
      width: 300,
    },
  });
  const classes = useStyles();
  return (
    <div className="range">
      <span style={{ color: "grey", fontSize: 12 }}>Prix entre :</span>
      <Slider
        className={classes.root}
        min={0}
        max={500}
        step={5}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
      />
    </div>
  );
};

export default PriceRange;
