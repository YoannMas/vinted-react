import logo from "../assets/img/Vinted_logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <Link to="/">
          <img src={logo} alt="Vinted's logo" />
        </Link>
        <input type="text" name="search" placeholder="Recherche des articles"></input>
        <div className="buttons">
          <Link className="button" name="signup">
            S'inscrire
          </Link>
          <Link className="button" to="/Signup" name="login">
            Se connecter
          </Link>
        </div>
        <Link className="button" name="selling">
          Vends tes articles
        </Link>
      </div>
    </div>
  );
};

export default Header;
