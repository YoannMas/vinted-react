import logo from "../assets/img/Vinted_logo.png";
import { Link, useHistory } from "react-router-dom";
import PriceSwitch from "./PriceSwitch";
import PriceRange from "./PriceRange";
import Signup from "../components/Signup";
import Login from "../components/Login";

const Header = ({
  userToken,
  setUser,
  setSearch,
  search,
  setPrice,
  range,
  setRange,
  currentPage,
  loginModal,
  setLoginModal,
  signupModal,
  setSignupModal,
  server,
}) => {
  const history = useHistory();

  return (
    <div className="header">
      {/* Modals for signup and login components */}
      {signupModal && (
        <Signup setUser={setUser} setSignupModal={setSignupModal} setLoginModal={setLoginModal} currentPage={currentPage} server={server} />
      )}
      {loginModal && (
        <Login setUser={setUser} setSignupModal={setSignupModal} setLoginModal={setLoginModal} currentPage={currentPage} server={server} />
      )}
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
          {/* Display switch and range only for the home page */}
          {currentPage === "Home" && (
            <div>
              <PriceSwitch setPrice={setPrice} />
              <PriceRange range={range} setRange={setRange} />
            </div>
          )}
        </div>
        {/* Display a disconnect button if user is logged */}
        {!userToken ? (
          <div className="buttons">
            <button
              className="button"
              name="signup"
              onClick={() => {
                setSignupModal((signupModal) => !signupModal);
              }}
            >
              S'inscrire
            </button>
            <button
              className="button"
              name="login"
              onClick={() => {
                setLoginModal((loginModal) => !loginModal);
              }}
            >
              Se connecter
            </button>
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

        <Link to="/Publish" className="button" name="selling">
          Vends tes articles
        </Link>
      </div>
    </div>
  );
};

export default Header;
