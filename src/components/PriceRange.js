import { makeStyles, Slider } from "@material-ui/core";
import { useState } from "react";

const PriceRange = ({ range, setRange }) => {
  const handleChange = (event, newValue) => {
    setRange(newValue);
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
        value={range}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
      />
    </div>
  );
};

export default PriceRange;
