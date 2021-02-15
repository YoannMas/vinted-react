import axios from "axios";
import { useState } from "react";
import Cookies from "js-cookie";
import Login from "../components/Login";

const Publish = ({ setMainPage }) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [file, setFile] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [condition, setCondition] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const token = Cookies.get("userToken");

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();

      const formData = new FormData();
      formData.append("picture", file);
      formData.append("title", title);
      formData.append("description", description);
      formData.append("brand", brand);
      formData.append("size", size);
      formData.append("color", color);
      formData.append("condition", condition);
      formData.append("location", location);
      formData.append("price", price);

      const response = await axios.post("https://vinted-reacteur.herokuapp.com/offer/publish", formData, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="publish">
      {setMainPage(false)}
      {!token && <Login />}
      <div className="container">
        <h2>Vends ton article</h2>
        <form onSubmit={handleSubmit}>
          <div className="publish-wrapper">
            <div className="dashed">
              <div>
                <label for="pictures">
                  <span>+</span>
                  <span>Ajoute une photo</span>
                </label>
                <input
                  type="file"
                  id="pictures"
                  onChange={(event) => {
                    setFile(event.target.files[0]);
                  }}
                />
              </div>
            </div>
          </div>
          <div>
            <div>
              <label for="title">Titre</label>
              <input
                type="text"
                id="title"
                value={title}
                placeholder="ex: Chemise Sézane verte"
                onChange={(event) => {
                  setTitle(event.target.value);
                }}
              />
            </div>
            <div className="description-box">
              <label for="description">Décris ton article</label>
              <textarea
                type="text"
                id="description"
                value={description}
                placeholder="ex: porté quelques fois, taille correctement"
                onChange={(event) => {
                  setDescription(event.target.value);
                }}
              />
            </div>
          </div>
          <div>
            <div>
              <label for="brand">Marque</label>
              <input
                type="text"
                id="brand"
                value={brand}
                placeholder="ex: Sézanne"
                onChange={(event) => {
                  setBrand(event.target.value);
                }}
              />
            </div>
            <div>
              <label for="size">Taille</label>
              <input
                type="text"
                id="size"
                value={size}
                placeholder="ex: L / 40 / 12"
                onChange={(event) => {
                  setSize(event.target.value);
                }}
              />
            </div>
            <div>
              <label for="color">Couleur</label>
              <input
                type="text"
                id="color"
                value={color}
                placeholder="ex: Vert"
                onChange={(event) => {
                  setColor(event.target.value);
                }}
              />
            </div>
            <div>
              <label for="condition">Etat</label>
              <input
                type="text"
                id="condition"
                value={condition}
                placeholder="ex: Neuf avec étiquette"
                onChange={(event) => {
                  setCondition(event.target.value);
                }}
              />
            </div>
            <div>
              <label for="location">Lieu</label>
              <input
                type="text"
                id="location"
                value={location}
                placeholder="ex: Paris"
                onChange={(event) => {
                  setLocation(event.target.value);
                }}
              />
            </div>
          </div>
          <div>
            <div>
              <label for="price">Prix</label>
              <div className="price-checkbox">
                <input
                  type="text"
                  id="price"
                  value={price}
                  placeholder="0,00 €"
                  onChange={(event) => {
                    setPrice(event.target.value);
                  }}
                />
                <div>
                  <input type="checkbox" id="swap" />
                  <label for="swap">Je suis intéressé(e) par les échanges</label>
                </div>
              </div>
            </div>
          </div>
          <div className="button-div">
            <button>Ajouter</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Publish;
