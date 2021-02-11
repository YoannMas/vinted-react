import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Signup = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState({});
  const history = useHistory();

  const fetchData = async () => {
    const response = await axios.post("https://vinted-reacteur.herokuapp.com/user/signup", {
      username: username,
      email: email,
      phone: phone,
      password: password,
    });
    const dataTemp = await response.data;
    setData(dataTemp);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchData();
    const token = data;
    console.log(token);
    setUser(token);

    // history.push("/");
  };

  useEffect(() => {
    {
      username && fetchData();
    }
  }, []);

  return (
    <div className="signup">
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
        <Link to="/Login">Tu as déjà un compte ? Connecte-toi !</Link>
      </form>
    </div>
  );
};

export default Signup;
