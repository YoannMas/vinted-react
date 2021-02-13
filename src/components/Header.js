import logo from "../assets/img/Vinted_logo.png";
import { Link, useHistory } from "react-router-dom";
import PriceSwitch from "./PriceSwitch";
import PriceRange from "./PriceRange";

const Header = ({ userToken, setUser, setSearch, search, setPrice, range, setRange }) => {
  const history = useHistory();

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
            <PriceSwitch setPrice={setPrice} />
            <PriceRange range={range} setRange={setRange} />
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
