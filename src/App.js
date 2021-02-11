import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";
import Home from "./containers/Home";
import Offer from "./containers/Offer";
import Header from "./components/Header";
import Signup from "./containers/Signup";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
library.add(faHeart);

function App() {
  const [userToken, setUserToken] = useState();
  const setUser = (token) => {
    console.log(token);
    Cookies.set("userToken", token, { expires: 7 });
    setUserToken(token);
  };

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/Offer/:id">
            <Offer />
          </Route>
          <Route path="/Signup">
            <Signup setUser={setUser} />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
