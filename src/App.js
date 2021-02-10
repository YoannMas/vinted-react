import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./containers/Home";
import Offer from "./containers/Offer";
import Header from "./components/Header";
import axios from "axios";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
library.add(faHeart);

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const fetchData = async () => {
    const response = await axios.get("https://vinted-reacteur.herokuapp.com/offers");
    setData(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <Router>
        <Header />
        {isLoading ? (
          <span>En cours de chargement</span>
        ) : (
          <Switch>
            <Route path="/Offer/:id">
              <Offer data={data} setData={setData} />
            </Route>
            <Route path="/">
              <Home data={data} />
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
