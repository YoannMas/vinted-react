import { useState } from "react";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const Signup = ({ setUser, setSignupModal, setLoginModal, currentPage }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const history = useHistory();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const response = await axios.post("https://vinted-reacteur.herokuapp.com/user/signup", {
        username: username,
        email: email,
        phone: phone,
        password: password,
      });
      setUser(response.data.token);
      setSignupModal(false);
      history.push("/");
    } catch (error) {
      console.log(error.message);
      setErrorMessage("There is something wrong, please try again");
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
            if (currentPage === "Publish") {
              history.push("/");
              setSignupModal(false);
            } else {
              setSignupModal(false);
            }
          }}
        >
          <FontAwesomeIcon icon={faTimes} />
        </span>
        <h2>S'inscrire</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            placeholder="Nom d'utilisateur"
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          <input
            type="email"
            value={email}
            placeholder="Email"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <input
            type="tel"
            value={phone}
            placeholder="Numéro de téléphone"
            onChange={(event) => {
              setPhone(event.target.value);
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
          <div className="newsletter">
            <input type="checkbox" name="newsletter" />
            <label>S'inscrire à notre newsletter</label>
          </div>
          <p>
            En m'inscrivant je confirme avoir lu et accepté les Termes & Conditions et Politique de Confidentialité de Vinted. Je confirme
            avoir au moins 18 ans.
          </p>
          <button type="submit">S'inscrire</button>
          <span style={{ fontSize: 12, color: "red", display: "flex", justifyContent: "center", marginBottom: 10 }}>{errorMessage}</span>
          <a
            onClick={() => {
              setSignupModal(false);
              setLoginModal(true);
            }}
          >
            Tu as déjà un compte ? Connecte-toi !
          </a>
        </form>
      </div>
    </div>
  );
};

export default Signup;
