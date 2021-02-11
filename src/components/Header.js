import logo from "../assets/img/Vinted_logo.png";
import { Link } from "react-router-dom";

const Header = ({ userToken, setUser }) => {
  return (
    <div className="header">
      <div className="container">
        <Link to="/">
          <img src={logo} alt="Vinted's logo" />
        </Link>
        <input type="text" name="search" placeholder="Recherche des articles"></input>
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
