import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";
import Home from "./containers/Home";
import Offer from "./containers/Offer";
import Header from "./components/Header";
import Signup from "./containers/Signup";
import Login from "./containers/Login";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHeart, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
library.add(faHeart);

function App() {
  const [search, setSearch] = useState("");
  const [price, setPrice] = useState(true);
  const [range, setRange] = useState([0, 100]);
  const [userToken, setUserToken] = useState(Cookies.get("userToken") || null);
  const setUser = (token) => {
    if (token) {
      Cookies.set("userToken", token, { expires: 7 });
      setUserToken(token);
    } else {
      Cookies.remove("userToken");
      setUserToken(null);
    }
  };
  console.log(range);

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
        />
        <Switch>
          <Route path="/Offer/:id">
            <Offer />
          </Route>
          <Route path="/Signup">
            <Signup setUser={setUser} />
          </Route>
          <Route path="/Login">
            <Login setUser={setUser} />
          </Route>
          <Route path="/">
            <Home search={search} price={price} range={range} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
