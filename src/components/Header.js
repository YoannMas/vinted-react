import logo from "../assets/img/Vinted_logo.png";
import { Link, useHistory } from "react-router-dom";
import PriceSwitch from "./PriceSwitch";
import PriceRange from "./PriceRange";
import Signup from "../components/Signup";
import Login from "../components/Login";
import { useState } from "react";

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
}) => {
  const history = useHistory();

  return (
    <div className="header">
      {signupModal && <Signup setUser={setUser} setSignupModal={setSignupModal} setLoginModal={setLoginModal} />}
      {loginModal && <Login setUser={setUser} setSignupModal={setSignupModal} setLoginModal={setLoginModal} currentPage={currentPage} />}
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
          {currentPage === "home" && (
            <div>
              <PriceSwitch setPrice={setPrice} />
              <PriceRange range={range} setRange={setRange} />
            </div>
          )}
        </div>
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
