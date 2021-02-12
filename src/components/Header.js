import logo from "../assets/img/Vinted_logo.png";
import { Link, useHistory } from "react-router-dom";
import { Switch, withStyles } from "@material-ui/core";
import { useState } from "react";

const Header = ({ userToken, setUser, setSearch, search, price, setPrice }) => {
  const history = useHistory();
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
    <div className="header">
      <div className="container">
        <Link to="/">
          <img src={logo} alt="Vinted's logo" />
        </Link>
        <div className="filters">
          <input
            type="text"
            value={search}
            placeholder="Recherche des articles"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          ></input>
          <div>
            <span style={{ color: "grey", fontSize: 14 }}>Triez par prix :</span>
            <PriceSwitch
              checked={checked}
              onChange={() => {
                toggleChecked();
                setPrice((price) => !price);
              }}
            ></PriceSwitch>
          </div>
        </div>
        {!userToken ? (
          <div className="buttons">
            <Link className="button" to="/Signup" name="signup">
              S'inscrire
            </Link>
            <Link className="button" to="/Login" name="login">
              Se connecter
            </Link>
          </div>
        ) : (
          <button
            className="button logoff"
            onClick={() => {
              setUser(null);
              history.push("/");
            }}
          >
            Se déconnecter
          </button>
        )}

        <Link className="button" name="selling">
          Vends tes articles
        </Link>
      </div>
    </div>
  );
};

export default Header;
