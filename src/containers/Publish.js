const Publish = () => {
  return (
    <div className="publish">
      <div className="container">
        <h2>Vends ton article</h2>
        <form>
          <div className="publish-wrapper">
            <div className="dashed">
              <div>
                <label for="pictures">
                  <span>+</span>
                  <span>Ajoute une photo</span>
                </label>
                <input type="file" id="pictures" />
              </div>
            </div>
          </div>
          <div>
            <div>
              <label for="title">Titre</label>
              <input type="text" id="title" placeholder="ex: Chemise Sézane verte" />
            </div>
            <div className="description-box">
              <label for="description">Décris ton article</label>
              <textarea type="text" id="description" placeholder="ex: porté quelques fois, taille correctement" />
            </div>
          </div>
          <div>
            <div>
              <label for="brand">Marque</label>
              <input type="text" id="brand" placeholder="ex: Sézanne" />
            </div>
            <div>
              <label for="size">Taille</label>
              <input type="text" id="size" placeholder="ex: L / 40 / 12" />
            </div>
            <div>
              <label for="color">Couleur</label>
              <input type="text" id="color" placeholder="ex: Vert" />
            </div>
            <div>
              <label for="condition">Etat</label>
              <input type="text" id="condition" placeholder="ex: Neuf avec étiquette" />
            </div>
            <div>
              <label for="location">Lieu</label>
              <input type="text" id="location" placeholder="ex: Paris" />
            </div>
          </div>
          <div>
            <div>
              <label for="price">Prix</label>
              <div className="price-checkbox">
                <input type="text" id="price" placeholder="0,00 €" />
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
