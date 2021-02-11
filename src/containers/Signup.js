import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="signup">
      <h2>S'inscrire</h2>
      <form>
        <input type="text" name="username" placeholder="Nom d'utilisateur" />
        <input type="email" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Mot de passe" />
        <div className="newsletter">
          <input type="checkbox" name="newsletter" />
          <label>S'inscrire à notre newsletter</label>
        </div>
        <p>
          En m'inscrivant je confirme avoir lu et accepté les Termes & Conditions et Politique de Confidentialité de Vinted. Je confirme
          avoir au moins 18 ans.
        </p>
        <button type="submit">S'inscrire</button>
        <Link>Tu as déjà un compte ? Connecte-toi !</Link>
      </form>
    </div>
  );
};

export default Signup;
