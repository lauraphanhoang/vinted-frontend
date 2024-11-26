import { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import axios from "axios";

const Publish = ({ token }) => {
  const [picture, setPicture] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [condition, setCondition] = useState("");
  const [city, setCity] = useState("");
  const [price, setPrice] = useState("");
  const [exchange, setExchange] = useState("");
  const [preview, setPreview] = useState("");

  const navigate = useNavigate();

  return token ? (
    <main>
      <div className="publish-container">
        <form
          className="publish-form"
          onSubmit={async (event) => {
            event.preventDefault();
            try {
              const formData = new FormData();
              formData.append("picture", picture);
              formData.append("title", title);
              formData.append("description", description);
              formData.append("brand", brand);
              formData.append("size", size);
              formData.append("color", color);
              formData.append("condition", condition);
              formData.append("city", city);
              formData.append("price", price);

              const response = await axios.post(
                "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
                formData,
                {
                  headers: {
                    authorization: "Bearer " + token,
                    "Content-Type": "multipart/form-data",
                  },
                }
              );

              console.log(response.data);

              if (response.data._id) {
                navigate("/offers/:id" + response.data._id);
              } else {
                console.log("une erreur est survenue veuillez réessayer");
              }
            } catch (error) {
              console.log(error.response);
            }
          }}
        >
          <h1>Vends ton article</h1>
          <div className="container-image">
            <div className="drop-image">
              {picture && <img src={preview} alt="image sélectionnée" />}
              <label className="picture" htmlFor="picture">
                Ajoute une photo
              </label>
              <input
                type="file"
                id="picture"
                onChange={(event) => {
                  setPicture(event.target.files[0]);
                  setPreview(URL.createObjectURL(event.target.files[0]));
                }}
              />
            </div>
          </div>
          <div className="container-1">
            <div className="container-2">
              <label htmlFor="title">Titre </label>
              <input
                type="text"
                placeholder="ex: Veste vintage en cuir"
                id="title"
                value={title}
                onChange={(event) => {
                  setTitle(event.target.value);
                }}
              />
            </div>
            <div className="container-2">
              <label htmlFor="description">Décris ton article </label>
              <input
                type="text"
                placeholder="ex: porté quelques fois, taille correctement"
                id="description"
                value={description}
                onChange={(event) => {
                  setDescription(event.target.value);
                }}
              />
            </div>
          </div>

          <div className="container-1">
            <div className="container-2">
              <label htmlFor="brand">Marque </label>
              <input
                type="text"
                placeholder="ex: Zara"
                id="brand"
                value={brand}
                onChange={(event) => {
                  setBrand(event.target.value);
                }}
              />
            </div>
            <div className="container-2">
              <label htmlFor="size">Taille </label>
              <input
                type="text"
                placeholder="ex: L /10/ 12"
                id="size"
                value={size}
                onChange={(event) => {
                  setSize(event.target.value);
                }}
              />
            </div>
            <div className="container-2">
              <label htmlFor="color">Couleur </label>
              <input
                type="text"
                placeholder="ex: Fushia"
                id="color"
                value={color}
                onChange={(event) => {
                  setColor(event.target.value);
                }}
              />
            </div>
            <div className="container-2">
              <label htmlFor="condition">État </label>
              <input
                type="text"
                placeholder="ex: Neuf avec étiquette"
                id="condition"
                value={condition}
                onChange={(event) => {
                  setCondition(event.target.value);
                }}
              />
            </div>
            <div className="container-2">
              <label htmlFor="city">Emplacement </label>
              <input
                type="text"
                placeholder="ex: Paris"
                id="city"
                value={city}
                onChange={(event) => {
                  setCity(event.target.value);
                }}
              />
            </div>
          </div>
          <div className="container-1">
            <div className="container-2">
              <label htmlFor="price">Prix </label>
              <input
                type="text"
                placeholder="0,00 €"
                id="price"
                value={price}
                onChange={(event) => {
                  setPrice(event.target.value);
                }}
              />
            </div>
            <div className="container-checkbox">
              <input
                type="checkbox"
                checked={exchange}
                onChange={(event) => {
                  setExchange(event.target.value);
                }}
              />
              <div>
                <span>Je suis intéressé(e) par les échanges</span>
              </div>
            </div>
          </div>

          <button className="add-article">Ajouter</button>
        </form>
      </div>
    </main>
  ) : (
    <Navigate to="/login" state={{ from: "/publish" }} />
  );
};
export default Publish;
