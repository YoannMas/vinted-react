import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";
import Home from "./containers/Home";
import Offer from "./containers/Offer";
import Header from "./components/Header";
import Publish from "./containers/Publish";
import Payment from "./containers/Payment";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
library.add(faHeart);

function App() {
  // State for filters
  const [search, setSearch] = useState("");
  const [price, setPrice] = useState(true);
  const [range, setRange] = useState([0, 100]);
  // State for userToken
  const [userToken, setUserToken] = useState(Cookies.get("userToken") || null);
  // State for modal (signup and login)
  const [signupModal, setSignupModal] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  // Define which page is the last to be visit
  const [currentPage, setCurrentPage] = useState("Home");
  // const server = "http://localhost:3001/";
  const server = "https://vinted-reacteur.herokuapp.com/";

  // Handle userToken (create and remove)
  const setUser = (token) => {
    if (token) {
      Cookies.set("userToken", token, { expires: 7 });
      setUserToken(token);
    } else {
      Cookies.remove("userToken");
      setUserToken(null);
    }
  };

  return (
    <div className="App">
      <Router>
        <Header
          userToken={userToken}
          setUser={setUser}
          setSearch={setSearch}
          search={search}
          setPrice={setPrice}
          price={price}
          range={range}
          setRange={setRange}
          currentPage={currentPage}
          signupModal={signupModal}
          setSignupModal={setSignupModal}
          loginModal={loginModal}
          setLoginModal={setLoginModal}
          server={server}
        />
        <Switch>
          <Route path="/Offer/:id">
            <Offer
              setUser={setUser}
              setLoginModal={setLoginModal}
              setSignupModal={setSignupModal}
              loginModal={loginModal}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
              server={server}
            />
          </Route>
          <Route path="/Publish">
            <Publish
              setUser={setUser}
              setLoginModal={setLoginModal}
              setSignupModal={setSignupModal}
              loginModal={loginModal}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
              server={server}
            />
          </Route>
          <Route path="/Payment">
            <Payment setCurrentPage={setCurrentPage} server={server} />
          </Route>
          <Route path="/">
            <Home search={search} price={price} range={range} setCurrentPage={setCurrentPage} server={server} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
