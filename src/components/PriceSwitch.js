import { Switch, withStyles } from "@material-ui/core";
import { useState } from "react";

const PriceSwitch = ({ setPrice }) => {
  const [checked, setChecked] = useState(false);
  const toggleChecked = () => {
    setChecked((checked) => !checked);
  };
  const PriceSwitch = withStyles({
    switchBase: {
      color: "#0cb0ba",
      "&$checked": {
        color: "#10979e",
      },
      "&$checked + $track": {
        backgroundColor: "#10979e",
      },
    },
    checked: {},
    track: {},
  })(Switch);
  return (
    <div className="switch">
      <span style={{ color: "grey", fontSize: 12 }}>Triez par prix :</span>
      <PriceSwitch
        checked={checked}
        onChange={() => {
          toggleChecked();
          setPrice((price) => !price);
        }}
      ></PriceSwitch>
    </div>
  );
};

export default PriceSwitch;
