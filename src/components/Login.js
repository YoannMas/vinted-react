import { useState } from "react";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const Login = ({ setUser, setLoginModal, setSignupModal, currentPage }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const history = useHistory();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const response = await axios.post("https://vinted-reacteur.herokuapp.com/user/login", {
        email: email,
        password: password,
      });
      setUser(response.data.token);
      setLoginModal(false);
      history.push(`/${currentPage}`);
    } catch (error) {
      console.log(error.message);
      setErrorMessage("Username or password is invalid");
      if (error.response) {
        console.log(error.response.message);
      }
    }
  };

  return (
    <div className="modals">
      <div className="signup-login">
        <span
          onClick={() => {
            setLoginModal(false);
          }}
        >
          <FontAwesomeIcon icon={faTimes} />
        </span>
        <h2>Se connecter</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            placeholder="Adresse email"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <input
            type="password"
            value={password}
            placeholder="Mot de passe"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <button type="submit">Se connecter</button>
          <span style={{ fontSize: 12, color: "red", display: "flex", justifyContent: "center", marginBottom: 10 }}>{errorMessage}</span>
          <a
            onClick={() => {
              setLoginModal(false);
              setSignupModal(true);
            }}
          >
            Pas encore de compte ? Inscris-toi !
          </a>
        </form>
      </div>
    </div>
  );
};

export default Login;
