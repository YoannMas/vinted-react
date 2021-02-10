import logo from "../assets/img/Vinted_logo.png";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <img src={logo} alt="Vinted's logo" />
        <input type="text" name="search" placeholder="Recherche des articles"></input>
        <div className="buttons">
          <button name="signup">S'inscrire</button>
          <button name="login">Se connecter</button>
        </div>
        <button name="selling">Vends tes articles</button>
      </div>
    </div>
  );
};

export default Header;
