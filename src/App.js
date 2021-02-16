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
  const [search, setSearch] = useState("");
  const [price, setPrice] = useState(true);
  const [range, setRange] = useState([0, 100]);
  const [userToken, setUserToken] = useState(Cookies.get("userToken") || null);
  const [signupModal, setSignupModal] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  const [currentPage, setCurrentPage] = useState("Home");
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
        />
        <Switch>
          <Route path="/Offer/:id">
            <Offer setCurrentPage={setCurrentPage} />
          </Route>
          <Route path="/Publish">
            <Publish
              setUser={setUser}
              setLoginModal={setLoginModal}
              setSignupModal={setSignupModal}
              loginModal={loginModal}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
            />
          </Route>
          <Route path="/Payment">
            <Payment />
          </Route>
          <Route path="/">
            <Home search={search} price={price} range={range} setCurrentPage={setCurrentPage} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
