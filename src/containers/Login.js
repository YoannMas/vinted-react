import { Link } from "react-router-dom";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Login = ({ setUser }) => {
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
      history.push("/");
    } catch (error) {
      console.log(error.message);
      setErrorMessage("Username or password is invalid");
      if (error.response) {
        console.log(error.response.message);
      }
    }
  };

  return (
    <div className="signup-login">
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
        <Link to="/Signup">Pas encore de compte ? Inscris-toi !</Link>
      </form>
    </div>
  );
};

export default Login;
